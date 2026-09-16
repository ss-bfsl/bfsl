import { useMemo, useState } from 'react';
import { useNewsApi } from '../lib/useNewsSocket';
import { Check, RefreshCw, Circle } from 'lucide-react';

const READ_NEWS_STORAGE_KEY = 'cbt:read-news';

function loadReadIds() {
  try {
    const stored = JSON.parse(localStorage.getItem(READ_NEWS_STORAGE_KEY) || '[]');
    return new Set(Array.isArray(stored) ? stored : []);
  } catch {
    return new Set();
  }
}

function newsTimestamp(item) {
  const timestamp = Date.parse(item.date);
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

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
  const [readIds, setReadIds] = useState(loadReadIds);

  const visibleItems = useMemo(
    () => items
      .filter((item) => !readIds.has(item.id))
      .sort((first, second) => newsTimestamp(second) - newsTimestamp(first)),
    [items, readIds],
  );

  const markAsRead = (id) => {
    setReadIds((current) => {
      const next = new Set(current);
      next.add(id);
      localStorage.setItem(READ_NEWS_STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  };

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

      {visibleItems.length === 0 ? (
        <div style={{ padding: 20, color: 'var(--text-dim)', fontSize: 13 }}>
          {status === 'open'
            ? readIds.size > 0 ? 'No unread news.' : 'No matching news yet.'
            : 'News data could not be loaded. Try again.'}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {visibleItems.map((n) => (
            <article
              key={n.id}
              className="panel"
              style={{ padding: '16px 18px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                <span className="tag">{n.company || 'News'}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="mono" style={{ fontSize: 11.5, color: 'var(--text-faint)' }}>
                    {new Date(n.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                  <button className="btn" onClick={() => markAsRead(n.id)} style={{ padding: '4px 9px', fontSize: 11.5 }}>
                    <Check size={13} />
                    Read
                  </button>
                </div>
              </div>
              <a href={n.sourceUrl} target="_blank" rel="noreferrer" style={{ fontSize: 14.5, fontWeight: 600, marginBottom: 6, display: 'block', color: 'inherit' }}>
                {n.title}
              </a>
              {n.summary && (
                <div
                  style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.5 }}
                  dangerouslySetInnerHTML={{ __html: n.summary }}
                />
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}