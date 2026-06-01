import { personal } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">contact</h2>

        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: 32,
          }}
        >
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              marginBottom: 24,
            }}
          >
            <span style={{ color: 'var(--accent-green)' }}>$</span> send me a
            message
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            <div className="form-grid">
              <input
                type="text"
                placeholder="name"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  padding: '12px 16px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: 6,
                  color: 'var(--text-primary)',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-green)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
              <input
                type="email"
                placeholder="email"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  padding: '12px 16px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: 6,
                  color: 'var(--text-primary)',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-green)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
            </div>
            <textarea
              placeholder="message"
              rows={4}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                padding: '12px 16px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: 6,
                color: 'var(--text-primary)',
                outline: 'none',
                resize: 'vertical',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent-green)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
            <div>
              <button type="submit" className="btn btn-primary">
                send message
              </button>
            </div>
          </form>

          <div
            style={{
              marginTop: 24,
              paddingTop: 24,
              borderTop: '1px solid var(--border)',
              fontSize: '0.8rem',
              color: 'var(--text-dim)',
            }}
          >
            <span className="terminal-prompt" style={{ fontSize: '0.8rem' }}>
              echo $EMAIL
            </span>
            <span style={{ color: 'var(--text-secondary)', marginLeft: 20 }}>
              {personal.email}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
