import { useMemo, useState } from 'react';
import { X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const RANGES = [
  { key: '6m', label: '6M', months: 6 },
  { key: '1y', label: '1Y', months: 12 },
  { key: 'all', label: 'All', months: Infinity },
];

export default function DetailModal({ title, subtitle, history, onClose }) {
  const [range, setRange] = useState('1y');

  const rows = useMemo(() => {
    if (!history) return [];
    const activeRange = RANGES.find((r) => r.key === range) ?? RANGES[1];
    return activeRange.months === Infinity ? history : history.slice(-activeRange.months);
  }, [history, range]);

  if (!history) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(4, 6, 10, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="panel"
        style={{
          width: '100%',
          maxWidth: 680,
          maxHeight: '85vh',
          overflow: 'auto',
          padding: '22px 24px',
          background: 'var(--panel-raised)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{title}</h3>
            {subtitle && <div style={{ fontSize: 12.5, color: 'var(--text-dim)', marginTop: 2 }}>{subtitle}</div>}
          </div>
          <button
            onClick={onClose}
            className="btn"
            style={{ padding: 6, borderRadius: '50%' }}
            aria-label="Close"
          >
            <X size={15} />
          </button>
        </div>

        {history.length === 0 ? (
          <div style={{ padding: '30px 0', color: 'var(--text-dim)', fontSize: 13, textAlign: 'center' }}>
            No historical data available yet for this item.
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', gap: 6, margin: '16px 0' }}>
              {RANGES.map((r) => (
                <button
                  key={r.key}
                  onClick={() => setRange(r.key)}
                  className="btn"
                  style={{
                    padding: '5px 12px',
                    fontSize: 12,
                    background: range === r.key ? 'var(--amber)' : 'var(--panel)',
                    color: range === r.key ? '#1a1305' : 'var(--text)',
                    borderColor: range === r.key ? 'var(--amber)' : 'var(--steel)',
                  }}
                >
                  {r.label}
                </button>
              ))}
              <span style={{ marginLeft: 'auto', fontSize: 11.5, color: 'var(--text-faint)', alignSelf: 'center' }}>
                {history.length} month{history.length === 1 ? '' : 's'} available total
              </span>
            </div>

            <div style={{ height: 220, marginBottom: 18 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={rows} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="#29334a" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: '#8993ab', fontSize: 10.5 }} axisLine={{ stroke: '#29334a' }} tickLine={false} interval="preserveStartEnd" />
                  <YAxis tick={{ fill: '#8993ab', fontSize: 10.5 }} axisLine={false} tickLine={false} width={64} />
                  <Tooltip
                    contentStyle={{ background: '#121826', border: '1px solid #29334a', borderRadius: 3, fontSize: 12 }}
                    labelStyle={{ color: '#e6e9f0' }}
                    formatter={(v) => [v.toLocaleString('en-IN'), 'Value']}
                  />
                  <Line type="monotone" dataKey="value" stroke="#e0a94e" strokeWidth={2} dot={{ r: 2.5, fill: '#e0a94e' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <table className="hairline-table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {[...rows].reverse().map((r) => (
                  <tr key={r.month}>
                    <td>{r.month}</td>
                    <td className="mono">{typeof r.value === 'number' ? r.value.toLocaleString('en-IN') : r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}