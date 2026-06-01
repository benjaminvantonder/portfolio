import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">skills</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 12,
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 18px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: skill.color,
                    display: 'block',
                  }}
                />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                  {skill.name}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 3 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    style={{
                      width: 6,
                      height: 14,
                      borderRadius: 2,
                      background:
                        i < skill.level
                          ? skill.color
                          : 'var(--bg-tertiary)',
                      opacity: i < skill.level ? 0.8 : 1,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
