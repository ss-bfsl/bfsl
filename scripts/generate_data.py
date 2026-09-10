#!/usr/bin/env python3
"""
Regenerates src/data/mockData.js from your monthly Excel workbook.

USAGE (from the project root):
    python scripts/generate_mock_data.py path/to/Industry_Data_.xlsx

What it does each run:
  1. Reads the "NSE active client data" sheet -> BROKER_LEADERBOARD
  2. Reads the "Broking data" sheet          -> INDUSTRY_PARAMS
  3. Reads the "MF & SIF Data" sheet         -> MF_SIF_DATA
  4. Overwrites src/data/mockData.js with fresh values.
  5. Leaves NEWS_ITEMS as a placeholder block (the News page now uses the
     live WebSocket feed, not this file, so it's untouched).

Just keep adding new month columns to the same workbook (same sheet names,
same layout) and re-run this after each month's data is added. No need to
touch mockData.js by hand.

Requirements: pip install pandas openpyxl --break-system-packages
"""

import argparse
import re
import sys
from pathlib import Path

import pandas as pd  # pyright: ignore[reportMissingModuleSource]

SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
DEFAULT_OUTPUT = PROJECT_ROOT / "src" / "data" / "mockData.js"


# ────────────────────────────── helpers ──────────────────────────────

def is_valid(v):
    if v is None or (isinstance(v, float) and pd.isna(v)):
        return False
    if isinstance(v, str) and v.strip() in ("-", "", "NA"):
        return False
    return True


def is_valid_nonzero(v):
    if not is_valid(v):
        return False
    if isinstance(v, (int, float)) and v == 0:
        return False
    return True


def to_num(v):
    if not is_valid(v):
        return None
    if isinstance(v, str):
        v = v.strip()
        try:
            return float(v)
        except ValueError:
            return None
    return float(v)


# ────────────────────────── broker leaderboard ──────────────────────────

def build_broker_leaderboard(xl):
    df = pd.read_excel(xl, sheet_name="NSE active client data", header=None)
    data = df.iloc[2:].copy()
    data.columns = ["broker", "m1", "m2", "m3", "m4", "m5", "diff", "mktshare",
                     "x1", "x2", "x3", "x4"]
    data["latest"] = data["m5"].apply(to_num)
    data["prev"] = data["m4"].apply(to_num)

    mask_total = data["broker"].astype(str).str.contains("Total", case=False, na=False)
    clean = data[~mask_total].copy()
    clean = clean[clean["latest"].notna() & (clean["latest"] > 0)]

    total_latest = clean["latest"].sum()
    clean = clean.sort_values("latest", ascending=False).reset_index(drop=True)

    records = []
    for i, row in clean.iterrows():
        latest, prev = row["latest"], row["prev"]
        change = round((latest - prev) / prev * 100, 2) if prev and prev > 0 else 0
        name = re.sub(r"\s{2,}", " ", str(row["broker"]).strip())
        records.append({
            "rank": i + 1,
            "broker": name,
            "activeClients": int(latest),
            "marketShare": round(latest / total_latest * 100, 2),
            "change": change,
        })
    return records


# ────────────────────────── industry params ──────────────────────────

SOURCE_URL_MAP = {
    "NSE/ Sebi bulletin": "https://www.nseindia.com",
    "SEBI bulletin": "https://www.sebi.gov.in",
    "NSE Pulse": "https://www.nseindia.com/research/publications-reports-nse-pulse",
}


def categorize(param, cat_col):
    p = param.lower()
    if "trading days" in p:
        return "Market Calendar"
    if "demat" in p:
        return "Demat Accounts"
    if "active clients" in p or "unique pans" in p:
        return "Active Clients"
    if p.startswith("fii") or p.startswith("dii"):
        return "FII/DII Flows"
    if cat_col == "M cap wise":
        return "Market Cap by Investor Type"
    if cat_col == "Overall":
        return "Market Turnover"
    if "mtf" in p:
        return "Margin Trading (MTF)"
    if cat_col == "Take from Amit":
        return "Retail ADTO"
    return "Other"


def source_url(source):
    if not source:
        return "https://www.nseindia.com"
    if isinstance(source, str) and "bseindia" in source:
        m = re.search(r"(https?://\S+)", source)
        return m.group(1) if m else "https://www.bseindia.com"
    if isinstance(source, str) and "nseindia" in source:
        m = re.search(r"(https?://\S+)", source)
        return m.group(1).rstrip(")") if m else "https://www.nseindia.com"
    return SOURCE_URL_MAP.get(source, "https://www.nseindia.com")


def source_label(source):
    if not source:
        return "Internal calc."
    if isinstance(source, str) and "bseindia" in source:
        return "BSE"
    if isinstance(source, str) and "nseindia" in source:
        return "NSE"
    return source


def fmt_value(param, val):
    if val is None:
        return None
    p = param.lower()
    if any(k in p for k in ["volume", "mtf", "adto"]):
        return f"₹{val:,.0f} Cr"
    if "lakh crore" in p:
        return f"₹{val:,.1f} Lakh Cr"
    if "(in cr)" in p or "(incr)" in p:
        return f"{val:,.2f} Cr"
    if isinstance(val, float) and val == int(val):
        return f"{int(val):,}"
    return f"{val:,.2f}"


def build_industry_params(xl):
    df = pd.read_excel(xl, sheet_name="Broking data", header=None)
    dates = [d.strftime("%b %Y") if hasattr(d, "strftime") else d
             for d in df.iloc[0, 3:].tolist()]

    records = []
    for i in range(1, df.shape[0]):
        row = df.iloc[i]
        param = row[0]
        if pd.isna(param) or (isinstance(param, str) and param.startswith("Src:")):
            continue
        cat_col = row[1] if not pd.isna(row[1]) else None
        source = row[2] if not pd.isna(row[2]) else None
        values = row[3:].tolist()
        idxs = [j for j, v in enumerate(values) if is_valid_nonzero(v)]
        if not idxs:
            continue
        last_idx = idxs[-1]
        prev_idx = idxs[-2] if len(idxs) >= 2 else None
        last_val = float(values[last_idx])
        prev_val = float(values[prev_idx]) if prev_idx is not None else None
        change = round((last_val - prev_val) / abs(prev_val) * 100, 1) if prev_val else 0
        clean_param = re.sub(r"\s*\(In\s?Cr\)|\s*\(lakh Crore\)|\s*\(Lk Cr\)", "",
                              str(param), flags=re.I).strip()
        clean_param = re.sub(r"\s{2,}", " ", clean_param)
        records.append({
            "category": categorize(str(param), cat_col),
            "param": clean_param,
            "value": fmt_value(str(param), last_val),
            "prevValue": fmt_value(str(param), prev_val) if prev_val is not None else "—",
            "change": change,
            "source": source_label(source),
            "sourceUrl": source_url(source),
            "asOf": dates[last_idx],
        })
    return records


# ────────────────────────── MF & SIF data ──────────────────────────

MF_FIELDS = [
    ("Total AUM", "Total AUM (Lk Cr)", lambda v: f"₹{v:,.2f} Lakh Cr"),
    ("Equity AUM", "Equity AUM (Lk Cr)", lambda v: f"₹{v:,.2f} Lakh Cr"),
    ("MF Schemes", "MF Schemes", lambda v: f"{int(v):,}"),
    ("MF Folios", "MF Folios (Lk Cr)", lambda v: f"{v:,.2f} Cr"),
    ("SIP Accounts", "SIP Accounts", lambda v: f"{v/100:,.2f} Cr"),
    ("SIP Monthly Inflow", "SIP Flows", lambda v: f"₹{v:,.0f} Cr"),
    ("SIP AUM", "SIP AUM", lambda v: f"₹{v/100000:,.2f} Lakh Cr"),
    ("SIF AUM", "SIF AUM", lambda v: f"₹{v:,.0f} Cr"),
    ("SIF Folios", "SIF Folios", lambda v: f"{int(v):,}"),
    ("SIF Schemes", "SIF Schemes", lambda v: f"{int(v):,}"),
    ("B30 Contribution", "B30 contribution (Lk Cr)", lambda v: f"₹{v:,.2f} Lakh Cr"),
    ("T30 Contribution", "T30 contribution  (Lk Cr)", lambda v: f"₹{v:,.2f} Lakh Cr"),
]


def build_mf_sif(xl):
    df = pd.read_excel(xl, sheet_name="MF & SIF Data", header=None)
    dates = df.iloc[0, 2:].tolist()

    def get_last_prev(param):
        row = df[df[0] == param]
        if row.empty:
            return None, None
        vals = row.iloc[0, 2:].tolist()
        idxs = [j for j, v in enumerate(vals) if is_valid(v)]
        if not idxs:
            return None, None
        last_idx = idxs[-1]
        prev_idx = idxs[-2] if len(idxs) >= 2 else None
        return float(vals[last_idx]), (float(vals[prev_idx]) if prev_idx is not None else None)

    def pct(last, prev):
        if last is None or prev is None or prev == 0:
            return 0
        return round((last - prev) / abs(prev) * 100, 1)

    headline = []
    for label, param, fmt in MF_FIELDS:
        last, prev = get_last_prev(param)
        if last is None:
            continue
        headline.append({"label": label, "value": fmt(last), "change": pct(last, prev)})

    total_s = df[df[0] == "Total AUM (Lk Cr)"].iloc[0, 2:].tolist()
    equity_s = df[df[0] == "Equity AUM (Lk Cr)"].iloc[0, 2:].tolist()
    trend = []
    for j in range(len(dates)):
        d = dates[j]
        if is_valid(total_s[j]) and is_valid(equity_s[j]):
            trend.append({
                "month": d.strftime("%b %y") if hasattr(d, "strftime") else str(d),
                "totalAum": round(float(total_s[j]), 1),
                "equityAum": round(float(equity_s[j]), 1),
            })
    trend = trend[-12:]

    return {"headline": headline, "aumTrend": trend}


# ────────────────────────── JS output ──────────────────────────

def to_js(obj):
    import json
    return json.dumps(obj, ensure_ascii=False, indent=2)


NEWS_PLACEHOLDER = """export const NEWS_ITEMS = [
  {
    id: 1,
    title: 'Groww launches zero-fee F&O plan for high-frequency traders',
    company: 'Groww',
    tag: 'Product Launch',
    date: '2026-09-04',
    summary: 'New pricing tier targets active F&O traders with flat monthly fee instead of per-order brokerage.',
    sourceUrl: 'https://www.google.com/search?q=groww+zero+fee+f%26o+plan',
  },
  {
    id: 2,
    title: 'Angel One rolls out AI-based portfolio advisory inside its app',
    company: 'Angel One',
    tag: 'Product Launch',
    date: '2026-09-02',
    summary: 'Feature suggests rebalancing actions based on user risk profile and holding concentration.',
    sourceUrl: 'https://www.google.com/search?q=angel+one+ai+portfolio+advisory',
  },
];
// ^ Unused by the News page (that now uses the live WebSocket feed via
// server/main.py) — still exported here only for the small Dashboard preview
// card. Safe to leave as-is or update by hand."""


def write_mock_data(output_path, brokers, industry, mf_sif):
    content = f"""// AUTO-GENERATED by scripts/generate_mock_data.py — do not hand-edit the
// BROKER_LEADERBOARD / INDUSTRY_PARAMS / MF_SIF_DATA sections below, they
// will be overwritten next time the script runs. Update the source Excel
// workbook and re-run the script instead.
//
// Regenerate with:
//   python scripts/generate_mock_data.py path/to/Industry_Data_.xlsx

export const BROKER_LEADERBOARD = {to_js(brokers)};

export const INDUSTRY_PARAMS = {to_js(industry)};

{NEWS_PLACEHOLDER}

export const MF_SIF_DATA = {to_js(mf_sif)};
"""
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(content, encoding="utf-8")


# ────────────────────────── main ──────────────────────────

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("excel_path", help="Path to the monthly Industry_Data_.xlsx workbook")
    parser.add_argument("--output", default=str(DEFAULT_OUTPUT),
                         help=f"Where to write mockData.js (default: {DEFAULT_OUTPUT})")
    args = parser.parse_args()

    excel_path = Path(args.excel_path)
    if not excel_path.exists():
        print(f"[ERROR] File not found: {excel_path}", file=sys.stderr)
        sys.exit(1)

    print(f"[1/4] Reading {excel_path.name} ...")
    xl = pd.ExcelFile(excel_path)

    print("[2/4] Building broker leaderboard ...")
    brokers = build_broker_leaderboard(xl)
    print(f"       -> {len(brokers)} brokers")

    print("[3/4] Building industry params ...")
    industry = build_industry_params(xl)
    print(f"       -> {len(industry)} parameters")

    print("[4/4] Building MF & SIF data ...")
    mf_sif = build_mf_sif(xl)
    print(f"       -> {len(mf_sif['headline'])} headline stats, "
          f"{len(mf_sif['aumTrend'])} months of AUM trend")

    output_path = Path(args.output)
    write_mock_data(output_path, brokers, industry, mf_sif)
    print(f"\n[OK] Wrote {output_path}")
    print("Refresh your browser (the dev server will hot-reload automatically).")


if __name__ == "__main__":
    main()