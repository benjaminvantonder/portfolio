import { personal } from '../data';

const ascii = `
     _._._                       _._._
    '\\_|_/'                     '\\_|_/'
      | |                         | |
  ____|_|_________________________|_|____
  |  ___                        ___    |
  | |   |  benjamin van tonder |   |   |
  | |___|   full-stack dev     |___|   |
  |_______________________________  |
                                   |_|
`;

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 48,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <div className="terminal-prompt" style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
            whoami
          </div>

          <pre
            className="hide-mobile ascii-art"
            style={{
              opacity: 0.6,
            }}
          >
            {ascii}
          </pre>

          <div style={{ marginTop: 8 }}>
            <h1
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              <span style={{ color: 'var(--text-primary)' }}>{personal.name}</span>
            </h1>
            <p
              style={{
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                color: 'var(--accent-green)',
                marginTop: 8,
                opacity: 0.85,
              }}
            >
              {'<'}
              <span style={{ color: 'var(--accent-cyan)' }}>{personal.tagline}</span>
              {' />'}
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              marginTop: 8,
            }}
          >
            <a href="#projects" className="btn btn-primary">
              view projects
            </a>
            <a href="#contact" className="btn">
              contact me
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              marginTop: 32,
              fontSize: '0.8rem',
              color: 'var(--text-dim)',
            }}
          >
            <span className="terminal-prompt" style={{ fontSize: '0.8rem' }}>
              echo $LOCATION
            </span>
            <span style={{ color: 'var(--text-secondary)', marginLeft: 20 }}>
              {personal.location}
            </span>
            <span className="terminal-prompt" style={{ fontSize: '0.8rem', marginTop: 4 }}>
              which stack
            </span>
            <span style={{ color: 'var(--text-secondary)', marginLeft: 20 }}>
              react, typescript, node.js, postgresql
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
