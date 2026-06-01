import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">projects</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {projects.map((p) => (
            <div key={p.title} className="card">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 16,
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <span style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>
                      ▶
                    </span>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>
                      {p.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    alignItems: 'flex-end',
                  }}
                >
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {p.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ padding: '6px 14px', fontSize: '0.75rem' }}
                      >
                        [{link.label}]
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
