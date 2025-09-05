import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Cursor from '../../components/Cursor';

export async function getStaticProps() {
  return {
    props: {
      customTitle: 'CGKM Terminal — Locked',
    },
  };
}

const CGKMLocked = () => {
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const correctPassword = 'freedom'; // change as needed

  const handleUnlock = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === correctPassword.toLowerCase()) {
      setUnlocked(true);
    } else {
      alert('Incorrect password. Try again.');
    }
  };

  return (
    <div className="terminal">
      <Head>
        <title>CGKM Terminal — Locked</title>
      </Head>

      {!unlocked ? (
        <main className="lock-screen">
          <h1 className="locked-title">CGKM TERMINAL</h1>
          <p className="locked-sub">ACCESS RESTRICTED — ENTER PASSWORD</p>
          <form onSubmit={handleUnlock} className="lock-form">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Unlock</button>
          </form>
        </main>
      ) : (
        <main className="unlocked">
          <h1>WELCOME CREATOR</h1>
          <p>The terminal is now unlocked.</p>
        </main>
      )}

      {/* Footer Navigation */}
      <footer className="project-footer">
        <div className="project-footer__nav">
          <Link href="/projects/previous" className="project-footer__arrow" data-cursor="prev">
            0
          </Link>
          <div className="project-footer__center">
            <h3 className="project-footer__label">TERMINAL</h3>
          </div>
          <Link href="/projects/next" className="project-footer__arrow" data-cursor="next">
            2
          </Link>
        </div>
      </footer>

      <Cursor />

      <style jsx>{`
        :root {
          --bg: #000;
          --fg: #fff;
          --accent: #f5c242;
        }
        .terminal {
          background: var(--bg);
          color: var(--fg);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .lock-screen,
        .unlocked {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
        }
        .locked-title {
          font-size: clamp(32px, 6vw, 64px);
          font-weight: 800;
          margin-bottom: 10px;
        }
        .locked-sub {
          color: #ccc;
          margin-bottom: 20px;
        }
        .lock-form {
          display: flex;
          gap: 10px;
        }
        .lock-form input {
          padding: 10px 14px;
          font-size: 16px;
          border: 1px solid #555;
          background: #111;
          color: var(--fg);
          outline: none;
          border-radius: 4px;
        }
        .lock-form button {
          padding: 10px 16px;
          background: var(--accent);
          color: #000;
          border: none;
          font-weight: bold;
          cursor: pointer;
          border-radius: 4px;
        }
        .lock-form button:hover {
          opacity: 0.85;
        }
        /* Footer */
        .project-footer {
          background: var(--accent);
          color: #000;
          padding: 1rem;
        }
        .project-footer__nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 960px;
          margin: 0 auto;
        }
        .project-footer__arrow {
          font-size: 2rem;
          text-decoration: none;
          color: #000;
        }
        .project-footer__center {
          text-align: center;
        }
        .project-footer__label {
          margin: 0;
          font-weight: 800;
          font-size: 1.25rem;
        }
      `}</style>
    </div>
  );
};

export default CGKMLocked;
