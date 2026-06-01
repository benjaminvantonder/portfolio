import { about } from '../data';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">about</h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            padding: '0 0 0 20px',
            borderLeft: '1px solid var(--border)',
          }}
        >
          {about.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              <span style={{ color: 'var(--accent-green)' }}>{i + 1}.</span>{' '}
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
