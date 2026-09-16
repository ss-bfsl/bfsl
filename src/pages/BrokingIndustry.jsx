import { useMemo, useState } from 'react';
import { useDataset } from '../lib/useDataset';
import FetchBar from '../components/FetchBar';
import DetailModal from '../components/DetailModal';

export default function BrokingIndustry() {
  const { data, ...fetchMeta } = useDataset('industryParams', 'monthly');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState(null);

  const categories = useMemo(() => {
    if (!data) return ['All'];
    return ['All', ...new Set(data.map((d) => d.category))];
  }, [data]);

  const filtered = data
    ? activeCategory === 'All'
      ? data
      : data.filter((d) => d.category === activeCategory)
    : [];

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1 className="page-title">Broking industry data</h1>
          <div className="page-sub">
            FII/DII volumes, demat accounts, turnover, flows and more — {data?.length ?? '30+'} parameters,
            each pulled from its own public source. Click any row for its full history. Auto-refreshes
            in the first week of every month.
          </div>
        </div>
      </div>

      <FetchBar {...fetchMeta} onRefresh={fetchMeta.refresh} />

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
        {categories.map((c) => (
          <button
            key={c}
            className="btn"
            onClick={() => setActiveCategory(c)}
            style={{
              padding: '6px 12px',
              fontSize: 12.5,
              background: activeCategory === c ? 'var(--amber)' : 'var(--panel-raised)',
              color: activeCategory === c ? '#1a1305' : 'var(--text)',
              borderColor: activeCategory === c ? 'var(--amber)' : 'var(--steel)',
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="panel">
        {fetchMeta.loading ? (
          <div style={{ padding: 20, color: 'var(--text-dim)', fontSize: 13 }}>Loading dataset…</div>
        ) : (
          <table className="hairline-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Current</th>
                <th>Previous</th>
                <th>Change</th>
                <th>As of</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.param} onClick={() => setSelected(p)} style={{ cursor: 'pointer' }}>
                  <td>
                    {p.param}
                    <div style={{ fontSize: 11, color: 'var(--text-faint)' }}>{p.category}</div>
                  </td>
                  <td className="mono">{p.value}</td>
                  <td className="mono" style={{ color: 'var(--text-faint)' }}>{p.prevValue}</td>
                  <td className={p.change >= 0 ? 'delta-up mono' : 'delta-down mono'}>
                    {p.change >= 0 ? '▲' : '▼'} {Math.abs(p.change)}%
                  </td>
                  <td className="mono" style={{ color: 'var(--text-faint)', fontSize: 12 }}>{p.asOf}</td>
                  <td>
                    <a
                      className="source-link"
                      href={p.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {p.source} ↗
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {selected && (
        <DetailModal
          title={selected.param}
          subtitle={`${selected.category} · Source: ${selected.source}`}
          history={selected.history}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}