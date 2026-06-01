import { useState } from 'react';
import { personal, socials } from '../data';

export default function TerminalHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle: React.CSSProperties = {
    color: 'var(--text-secondary)',
    transition: 'color 0.2s',
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 48,
        }}
      >
        <span style={{ fontSize: '0.85rem', color: 'var(--accent-green)' }}>
          <span style={{ color: 'var(--text-dim)' }}>~</span> /{personal.name.split(' ')[0].toLowerCase()}
        </span>

        <nav
          className="hide-mobile"
          style={{ display: 'flex', gap: 24, fontSize: '0.8rem' }}
        >
          {['about', 'skills', 'projects', 'contact'].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-green)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {s}
            </a>
          ))}
        </nav>

        <div
          className="hide-mobile"
          style={{ display: 'flex', gap: 12, fontSize: '0.8rem' }}
        >
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

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--accent-green)',
            fontSize: '1.4rem',
            cursor: 'pointer',
            padding: 4,
            lineHeight: 1,
          }}
          className="menu-toggle"
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border)',
            padding: '12px 16px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            fontSize: '0.9rem',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['about', 'skills', 'projects', 'contact'].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                style={{ color: 'var(--text-secondary)' }}
                onClick={closeMenu}
              >
                $ cd /{s}
              </a>
            ))}
          </nav>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />
          <div style={{ display: 'flex', gap: 16 }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}
                onClick={closeMenu}
              >
                [{s.label}]
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
