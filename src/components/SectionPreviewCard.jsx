import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function SectionPreviewCard({ title, to, children, footnote }) {
  return (
    <div className="panel" style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <h3 style={{ margin: 0, fontSize: 14.5, fontWeight: 600 }}>{title}</h3>
        <Link
          to={to}
          style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12.5, color: 'var(--text-dim)', textDecoration: 'none' }}
        >
          View full page <ArrowUpRight size={13} />
        </Link>
      </div>
      <div style={{ flex: 1 }}>{children}</div>
      {footnote && <div style={{ marginTop: 12, fontSize: 11.5, color: 'var(--text-faint)' }}>{footnote}</div>}
    </div>
  );
}
