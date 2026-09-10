import { useState } from 'react';
import { useDataset } from '../lib/useDataset';
import FetchBar from '../components/FetchBar';

export default function ActiveClients() {
  const { data, ...fetchMeta } = useDataset('brokerLeaderboard', 'monthly');
  const [sortKey, setSortKey] = useState('rank');

  const sorted = data
    ? [...data].sort((a, b) => (sortKey === 'rank' ? a.rank - b.rank : b[sortKey] - a[sortKey]))
    : [];

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1 className="page-title">NSE active clients — competition view</h1>
          <div className="page-sub">
            Broker-wise active client count and market share, sourced from the NSE arbitration/active
            clients disclosure. Auto-refreshes in the first week of every month.
          </div>
        </div>
        <a className="source-link" href="https://www.nseindia.com/invest/arbitration-status" target="_blank" rel="noreferrer">
          Source: NSE — Active Clients Report ↗
        </a>
      </div>

      <FetchBar {...fetchMeta} onRefresh={fetchMeta.refresh} />

      <div className="panel">
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
              {sorted.map((b) => (
                <tr key={b.rank}>
                  <td className="mono" style={{ color: 'var(--text-faint)' }}>{b.rank}</td>
                  <td>{b.broker}</td>
                  <td className="mono">{b.activeClients.toLocaleString('en-IN')}</td>
                  <td className="mono">{b.marketShare}%</td>
                  <td className={b.change >= 0 ? 'delta-up mono' : 'delta-down mono'}>
                    {b.change >= 0 ? '▲' : '▼'} {Math.abs(b.change)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
