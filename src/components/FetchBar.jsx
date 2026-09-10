import { RefreshCw, CheckCircle2 } from 'lucide-react';

function formatWhen(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

const TRIGGER_LABEL = {
  'auto-monthly': 'Auto-fetched (monthly schedule)',
  'auto-hourly': 'Auto-fetched (hourly schedule)',
  manual: 'Manually refreshed',
  initial: 'Initial load',
};

export default function FetchBar({ fetchedAt, trigger, loading, refreshing, onRefresh }) {
  return (
    <div
      className="panel"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px',
        marginBottom: 20,
        flexWrap: 'wrap',
        gap: 10,
      }}
    >
      <div className="fetch-status">
        <CheckCircle2 size={14} style={{ color: 'var(--teal)' }} />
        {loading ? (
          'Loading dataset…'
        ) : (
          <>
            Last updated <span className="mono">{formatWhen(fetchedAt)}</span>
            {trigger && <span className="tag">{TRIGGER_LABEL[trigger] ?? trigger}</span>}
          </>
        )}
      </div>
      <button className="btn" onClick={onRefresh} disabled={loading || refreshing}>
        <RefreshCw size={13} className={refreshing ? 'spin' : ''} />
        {refreshing ? 'Refreshing…' : 'Refresh now'}
      </button>
    </div>
  );
}
