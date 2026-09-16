import { useMemo, useState } from 'react';
import { useDataset } from '../lib/useDataset';
import FetchBar from '../components/FetchBar';
import StatCard from '../components/StatCard';
import DetailModal from '../components/DetailModal';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';

export default function MutualFunds() {
  const { data, ...fetchMeta } = useDataset('mfSif', 'monthly');
  const [selected, setSelected] = useState(null);

  // Combine Total AUM + Equity AUM histories into one series for the overview chart.
  const combinedTrend = useMemo(() => {
    if (Array.isArray(data?.aumTrend)) return data.aumTrend;
    const headline = Array.isArray(data?.headline) ? data.headline : [];
    const total = headline.find((item) => item.label === 'Total AUM');
    const equity = headline.find((item) => item.label === 'Equity AUM');
    if (!Array.isArray(total?.history)) return [];
    return total.history.map((point, index) => ({
      month: point.month,
      totalAum: point.value,
      equityAum: equity?.history?.[index]?.value ?? null,
    }));
  }, [data]);

  const headline = Array.isArray(data?.headline) ? data.headline : [];

  const historyFor = (item) => {
    if (Array.isArray(item.history)) return item.history;
    if (item.label === 'Total AUM') {
      return combinedTrend.map(({ month, totalAum }) => ({ month, value: totalAum }));
    }
    if (item.label === 'Equity AUM') {
      return combinedTrend.map(({ month, equityAum }) => ({ month, value: equityAum }));
    }
    return [];
  };

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1 className="page-title">MF &amp; SIF data</h1>
          <div className="page-sub">
            Total AUM, Equity AUM, SIP and SIF (Specialized Investment Fund) metrics. Click any stat
            card for its full history. Auto-refreshes in the first week of every month.
          </div>
        </div>
      </div>

      <FetchBar {...fetchMeta} onRefresh={fetchMeta.refresh} />

      {fetchMeta.loading ? (
        <div style={{ padding: 20, color: 'var(--text-dim)', fontSize: 13 }}>Loading dataset…</div>
      ) : (
        <>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: 12,
              marginBottom: 22,
            }}
          >
            {headline.map((h) => (
              <div key={h.label} onClick={() => setSelected({ ...h, history: historyFor(h) })} style={{ cursor: 'pointer' }}>
                <StatCard label={h.label} value={h.value} change={h.change} />
              </div>
            ))}
          </div>

          {combinedTrend.length > 0 && (
            <div className="panel" style={{ padding: '18px 20px', marginBottom: 22 }}>
              <h3 style={{ margin: '0 0 14px', fontSize: 14.5, fontWeight: 600 }}>
                Total AUM vs Equity AUM (₹ Lakh Cr) — full history
              </h3>
              <div style={{ height: 260 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={combinedTrend} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="#1e263a" vertical={false} />
                    <XAxis dataKey="month" tick={{ fill: '#8993ab', fontSize: 10.5 }} axisLine={{ stroke: '#29334a' }} tickLine={false} interval="preserveStartEnd" />
                    <YAxis tick={{ fill: '#8993ab', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ background: '#171f31', border: '1px solid #29334a', borderRadius: 3, fontSize: 12 }}
                      labelStyle={{ color: '#e6e9f0' }}
                    />
                    <Legend wrapperStyle={{ fontSize: 12, color: '#8993ab' }} />
                    <Line type="monotone" dataKey="totalAum" name="Total AUM" stroke="#e0a94e" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="equityAum" name="Equity AUM" stroke="#4fb0a5" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          <div className="panel" style={{ padding: '14px 18px', fontSize: 12.5, color: 'var(--text-faint)' }}>
            Top-AMC-by-AUM breakdown isn't in your source workbook yet — send that data whenever you have
            it and it'll slot in here as a table, the same way the rest of this page was wired up.
          </div>
        </>
      )}

      {selected && (
        <DetailModal
          title={selected.label}
          subtitle="MF & SIF data"
          history={selected.history}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}