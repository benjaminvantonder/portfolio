import { personal, socials } from '../data';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '32px 0',
        marginTop: 32,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
            fontSize: '0.8rem',
            color: 'var(--text-dim)',
          }}
        >
          <div style={{ display: 'flex', gap: 16 }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-dim)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
              >
                [{s.label}]
              </a>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ color: 'var(--accent-green)' }}>*</span>
            <span>&copy; {new Date().getFullYear()} {personal.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
