import { useMemo, useState } from 'react';
import { useDataset } from '../lib/useDataset';
import FetchBar from '../components/FetchBar';
import DetailModal from '../components/DetailModal';
import { Search } from 'lucide-react';

export default function ActiveClients() {
  const { data, ...fetchMeta } = useDataset('brokerLeaderboard', 'monthly');
  const [sortKey, setSortKey] = useState('rank');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (!data) return [];
    let rows = data;
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      rows = rows.filter((b) => b.broker.toLowerCase().includes(q));
    }
    return [...rows].sort((a, b) => (sortKey === 'rank' ? a.rank - b.rank : b[sortKey] - a[sortKey]));
  }, [data, sortKey, query]);

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1 className="page-title">NSE active clients — competition view</h1>
          <div className="page-sub">
            All {data?.length ?? '—'} trading members with active clients, ranked by active client count
            and market share. Click a row for its month-by-month history. Auto-refreshes in the first
            week of every month.
          </div>
        </div>
        <a className="source-link" href="https://www.nseindia.com/invest/arbitration-status" target="_blank" rel="noreferrer">
          Source: NSE — Active Clients Report ↗
        </a>
      </div>

      <FetchBar {...fetchMeta} onRefresh={fetchMeta.refresh} />

      <div style={{ position: 'relative', marginBottom: 14, maxWidth: 320 }}>
        <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-faint)' }} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search broker…"
          style={{
            width: '100%',
            background: 'var(--panel-raised)',
            border: '1px solid var(--steel)',
            borderRadius: 3,
            padding: '8px 10px 8px 32px',
            color: 'var(--text)',
            fontSize: 13,
          }}
        />
      </div>

      <div className="panel" style={{ maxHeight: 640, overflow: 'auto' }}>
        {fetchMeta.loading ? (
          <div style={{ padding: 20, color: 'var(--text-dim)', fontSize: 13 }}>Loading dataset…</div>
        ) : (
          <table className="hairline-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Broker</th>
                <th onClick={() => setSortKey('activeClients')} style={{ cursor: 'pointer' }}>
                  Active clients ↕
                </th>
                <th onClick={() => setSortKey('marketShare')} style={{ cursor: 'pointer' }}>
                  Market share ↕
                </th>
                <th>MoM change</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.rank} onClick={() => setSelected(b)} style={{ cursor: 'pointer' }}>
                  <td className="mono" style={{ color: 'var(--text-faint)' }}>{b.rank}</td>
                  <td>{b.broker}</td>
                  <td className="mono">{b.activeClients.toLocaleString('en-IN')}</td>
                  <td className="mono">{typeof b.marketShare === 'number' ? `${b.marketShare}%` : '—'}</td>
                  <td className={b.change >= 0 ? 'delta-up mono' : 'delta-down mono'}>
                    {b.change >= 0 ? '▲' : '▼'} {Math.abs(b.change)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {selected && (
        <DetailModal
          title={selected.broker}
          subtitle={`Rank #${selected.rank} · ${selected.marketShare}% market share`}
          history={selected.history}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}