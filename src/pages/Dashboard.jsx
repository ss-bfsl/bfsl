import { useDataset } from '../lib/useDataset';
import FetchBar from '../components/FetchBar';
import SectionPreviewCard from '../components/SectionPreviewCard';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

export default function Dashboard() {
  const brokers = useDataset('brokerLeaderboard', 'monthly');
  const industry = useDataset('industryParams', 'monthly');
  const news = useDataset('news', 'hourly');
  const mf = useDataset('mfSif', 'monthly');

  const topBrokers = brokers.data?.slice(0, 10) ?? [];

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <div className="page-sub">
            Broker market share, industry benchmarks, competitor moves and MF/SIF flows in one view.
          </div>
        </div>
      </div>

      <FetchBar {...brokers} onRefresh={brokers.refresh} />

      <div className="panel" style={{ padding: '18px 20px', marginBottom: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <h3 style={{ margin: 0, fontSize: 14.5, fontWeight: 600 }}>
            Brokers — active clients &amp; market share
          </h3>
        </div>

        {brokers.loading ? (
          <div style={{ color: 'var(--text-dim)', fontSize: 13 }}>Loading broker data…</div>
        ) : (
          <>
            <div style={{ height: 200, marginBottom: 10 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topBrokers} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                  <XAxis dataKey="broker" tick={{ fill: '#8993ab', fontSize: 10.5 }} axisLine={{ stroke: '#29334a' }} tickLine={false} interval={0} angle={-25} textAnchor="end" height={60} />
                  <Tooltip
                    contentStyle={{ background: '#171f31', border: '1px solid #29334a', borderRadius: 3, fontSize: 12 }}
                    labelStyle={{ color: '#e6e9f0' }}
                    formatter={(v) => [`${v}%`, 'Market share']}
                  />
                  <Bar dataKey="marketShare" fill="#e0a94e" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <table className="hairline-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Broker</th>
                  <th>Active clients</th>
                  <th>Market share</th>
                  <th>MoM change</th>
                </tr>
              </thead>
              <tbody>
                {topBrokers.map((b) => (
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
          </>
        )}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
        }}
      >
        <SectionPreviewCard title="Broking industry data" to="/broking-industry" footnote={`${industry.data?.length ?? '—'} tracked parameters`}>
          {industry.loading ? (
            <div style={{ color: 'var(--text-dim)', fontSize: 13 }}>Loading…</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {industry.data?.slice(0, 4).map((p) => (
                <div key={p.param} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5 }}>
                  <span style={{ color: 'var(--text-dim)' }}>{p.param}</span>
                  <span className="mono">{p.value}</span>
                </div>
              ))}
            </div>
          )}
        </SectionPreviewCard>

        <SectionPreviewCard title="NSE active clients" to="/active-clients" footnote="Full broker-wise breakdown">
          {brokers.loading ? (
            <div style={{ color: 'var(--text-dim)', fontSize: 13 }}>Loading…</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {brokers.data?.slice(0, 4).map((b) => (
                <div key={b.rank} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5 }}>
                  <span style={{ color: 'var(--text-dim)' }}>{b.broker}</span>
                  <span className="mono">{b.marketShare}%</span>
                </div>
              ))}
            </div>
          )}
        </SectionPreviewCard>

        <SectionPreviewCard title="Competitor news" to="/news" footnote="Refreshes hourly while running locally">
          {news.loading ? (
            <div style={{ color: 'var(--text-dim)', fontSize: 13 }}>Loading…</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {news.data?.slice(0, 3).map((n) => (
                <div key={n.id} style={{ fontSize: 12.5, lineHeight: 1.4 }}>
                  <span className="tag" style={{ marginRight: 6 }}>{n.tag}</span>
                  {n.title}
                </div>
              ))}
            </div>
          )}
        </SectionPreviewCard>

        <SectionPreviewCard title="MF & SIF data" to="/mutual-funds" footnote="Industry AUM & category flows">
          {mf.loading ? (
            <div style={{ color: 'var(--text-dim)', fontSize: 13 }}>Loading…</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {mf.data?.headline.slice(0, 4).map((h) => (
                <div key={h.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5 }}>
                  <span style={{ color: 'var(--text-dim)' }}>{h.label}</span>
                  <span className="mono">{h.value}</span>
                </div>
              ))}
            </div>
          )}
        </SectionPreviewCard>
      </div>
    </div>
  );
}
