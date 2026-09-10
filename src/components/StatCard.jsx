export default function StatCard({ label, value, change }) {
  const hasChange = typeof change === 'number';
  const positive = hasChange && change >= 0;
  return (
    <div className="panel" style={{ padding: '16px 18px' }}>
      <div style={{ fontSize: 12, color: 'var(--text-faint)', marginBottom: 8 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
        <span className="mono" style={{ fontSize: 21, fontWeight: 600 }}>{value}</span>
        {hasChange && (
          <span className={positive ? 'delta-up' : 'delta-down'} style={{ fontSize: 12.5 }}>
            {positive ? '▲' : '▼'} {Math.abs(change)}%
          </span>
        )}
      </div>
    </div>
  );
}
