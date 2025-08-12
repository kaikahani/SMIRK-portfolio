import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Cursor from '../../components/Cursor';

export async function getStaticProps() {
  return {
    props: {
      customTitle: 'SMiRK — Creative Direction',
    },
  };
}

const itemTitleAnimation = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const KillMonotony = () => {
  return (
    <div className="protocol">
      <Head>
        <title>SMiRK — Creative Direction</title>
        <meta
          name="description"
          content="Serious creative direction. We build worlds that cut through the noise."
        />
      </Head>

      <main className="wrap">
        <h1 className="headline">
          Creative direction
          <br />
          that turns heads.
        </h1>

        <p className="intro">
          At SMiRK we build worlds, not campaigns. We align story, sound, and
          style into art that is impossible to ignore. We&apos;re looking for purple
          cows. No gimmicks. No noise. Just clarity.
        </p>

        <a
          href="mailto:smirk.ca@gmail.com?subject=Inquiry%20—%20Creative%20Direction"
          className="cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let&apos;s talk
        </a>

        {/* Kill Monotony text */}
        <div className="kill-monotony">
          <motion.span
            variants={itemTitleAnimation}
            initial="hidden"
            animate="visible"
          >
            KILL
          </motion.span>{' '}
          <motion.span
            variants={itemTitleAnimation}
            initial="hidden"
            animate="visible"
          >
            MONO
            <span style={{ color: '#FE0200', display: 'inline' }}>TONY</span>
          </motion.span>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="project-footer">
        <div className="project-footer__nav">
          <Link href="/projects/my-eyes" legacyBehavior>
            <a className="project-footer__arrow" data-cursor="prev">
              ←
            </a>
          </Link>
          <div className="project-footer__center">
            <h3 className="project-footer__label">CHOOSE ONE</h3>
          </div>
          <Link href="/projects/lemon-meringue" legacyBehavior>
            <a className="project-footer__arrow" data-cursor="next">
              →
            </a>
          </Link>
        </div>
      </footer>

      <Cursor />

      <style jsx>{`
        :root {
          --bg: #000;
          --fg: #fff;
          --muted: #cfcfcf;
          --accent: #f5c242;
          --max: 1040px;
        }
        .protocol {
          background: var(--bg);
          color: var(--fg);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .wrap {
          width: 100%;
          max-width: var(--max);
          margin: 0 auto;
          padding: 18vh 20px 8vh;
        }
        .headline {
          font-family: 'Bebas Neue', ui-sans-serif, system-ui, -apple-system,
            Segoe UI, Roboto, 'Helvetica Neue', Arial;
          font-weight: 800;
          margin: 0 0 24px 0;
          line-height: 0.98;
          font-size: clamp(40px, 8vw, 92px);
        }
        .intro {
          font-family: ui-sans-serif, system-ui, -apple-system, 'SF Pro Text',
            Segoe UI, Roboto, 'Helvetica Neue', Arial;
          color: var(--muted);
          margin: 0 0 40px 0;
          line-height: 1.7;
          font-size: clamp(16px, 2.1vw, 20px);
          max-width: 760px;
        }
        .cta {
          display: inline-block;
          padding: 12px 20px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 999px;
          text-decoration: none;
          color: var(--fg);
          font-weight: 600;
          letter-spacing: 0.02em;
          transition: transform 0.2s ease, background 0.2s ease,
            border-color 0.2s ease;
        }
        .cta:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.35);
        }
        .kill-monotony {
          margin-top: 2rem;
          font-size: clamp(40px, 6vw, 72px);
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 800;
          text-align: center;
        }
        .project-footer {
          margin-top: auto;
          background: var(--accent);
          color: #000;
          padding: 2rem 1rem;
        }
        .project-footer__nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 960px;
          margin: 0 auto;
        }
        .project-footer__arrow {
          font-size: 2.5rem;
          text-decoration: none;
          color: #000;
        }
        .project-footer__center {
          text-align: center;
        }
        .project-footer__label {
          margin: 0;
          font-weight: 800;
          font-size: 1.5rem;
        }
        @media (max-width: 640px) {
          .wrap {
            padding: 16vh 16px 8vh;
          }
          .project-footer__label {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default KillMonotony;
