import { useNewsApi } from '../lib/useNewsSocket';
import { RefreshCw, Circle } from 'lucide-react';

const STATUS_LABEL = {
  connecting: 'Connecting…',
  open: 'Live',
  closed: 'Disconnected — is main.py running?',
  unavailable: 'Live feed unavailable on this deployment',
};

const STATUS_COLOR = {
  connecting: 'var(--amber)',
  open: 'var(--teal)',
  closed: 'var(--rose)',
  unavailable: 'var(--text-faint)',
};

export default function News() {
  const { items, status, reconnect } = useNewsApi();

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1 className="page-title">Competitor news</h1>
          <div className="page-sub">
            Live feed from your news-alerts service — product launches, partnerships, funding and
            regulatory moves, filtered by your keyword rules.
          </div>
        </div>
      </div>

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
          <Circle size={10} fill={STATUS_COLOR[status]} stroke="none" />
          {STATUS_LABEL[status]}
        </div>
        <button className="btn" onClick={reconnect} disabled={status === 'unavailable'}>
          <RefreshCw size={13} />
          Reconnect
        </button>
      </div>

      {items.length === 0 ? (
        <div style={{ padding: 20, color: 'var(--text-dim)', fontSize: 13 }}>
          {status === 'open'
            ? 'No matching news yet.'
            : 'News data could not be loaded. Try again.'}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {items.map((n) => (
            <a
              key={n.id}
              href={n.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="panel"
              style={{ padding: '16px 18px', display: 'block', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                <span className="tag">{n.company || 'News'}</span>
                <span className="mono" style={{ fontSize: 11.5, color: 'var(--text-faint)' }}>
                  {new Date(n.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                </span>
              </div>
              <div style={{ fontSize: 14.5, fontWeight: 600, marginBottom: 6 }}>{n.title}</div>
              {n.summary && (
                <div
                  style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.5 }}
                  dangerouslySetInnerHTML={{ __html: n.summary }}
                />
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}