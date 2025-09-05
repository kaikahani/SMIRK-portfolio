import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Cursor from '../../components/Cursor'; // Adjust path if needed

export async function getStaticProps() {
  return {
    props: {
      customTitle: 'SHO-REEL 🎬 SMiRK',
    },
  };
}

const FahReel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.cursor-play');
    const hero = document.querySelector('.hero');

    if (!cursor || !hero) return;

    const show = () => {
      cursor.style.display = 'flex';
    };
    const hide = () => {
      cursor.style.display = 'none';
    };
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    hero.addEventListener('mouseenter', show);
    hero.addEventListener('mouseleave', hide);
    document.addEventListener('mousemove', moveCursor);

    return () => {
      hero.removeEventListener('mouseenter', show);
      hero.removeEventListener('mouseleave', hide);
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const credits = [
    { role: '00:03', name: 'Matterfactually by Proximity Effect ' },
    { role: '00:08', name: 'Our duty as Arts Leaders' },
    { role: '00:20', name: 'Impressed - Visualizer' },
    { role: '00:23', name: 'Lemon Meringue BTS' },
    { role: '00:27', name: 'Picking genres' },
    { role: '00:28', name: 'Verses That Electrify me' },
    { role: '00:31', name: 'WWYD Visualizer' },
    { role: '00:32', name: 'WYD Visualizer' },
    { role: '00:37', name: 'Breaking out - a short film' },
    { role: '00:41', name: 'HeyYouWantALemon' },
    { role: '00:45', name: 'God Said Visualizer' },
    { role: '00:55', name: 'God Said visualizer 2' },
    { role: '00:57', name: 'Breaking out - a short film' },
    { role: '01:04', name: 'HeyYouWantALemon' },
    { role: '01:05', name: 'Riverside Vlog' },
  ];

  return (
    <div className="shoreel-page">
      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero__video"
          data-cursor="pause"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/reel-1.jpg"
        >
          <source src="/videos/reelpreview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1 className="hero__title">
            SMiRK
            <br />
            &apos;SHO-REEL
          </h1>
          <p className="hero__subtitle">A look inside our world</p>
          <button className="hero__play" onClick={() => setIsModalOpen(true)}>
            Play ▶
          </button>
        </div>
      </section>

      {/* Description Section */}
      <section className="description">
        <div className="description__wrapper">
          <div className="description__media">
            <video autoPlay muted loop playsInline className="description__video">
              <source src="/videos/longway-reel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="description__container">
            <p>
              The camera is a passport. A direct passage into new worlds, and the thread that pulls
              others inside with us. Film allows us bend reality, stretch time, and paint with light
              as well as darkness. The cross section between our love for surrealism and our need to
              <span style={{ color: 'red' }}> spark </span>
              <span style={{ color: '#F5C242' }}> joy </span>
              , Where dream logic is as true as daylight.
              <br />
              <br />
              Being behind the lens is more than composition, it is world-building in motion.
              Stitching together color, sound, idea, and movement until it breathes. This reel is a
              glimpse into our obsession: to create places you have never been but somehow remember,
              with stories that stay with you forever.
            </p>
          </div>
          <div className="description__media">
            <video autoPlay muted loop playsInline className="description__video">
              <source src="/videos/longway-reel-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="description__gallery">
          <Image src="/pictures/reel-1.jpg" alt="Reel visual 1" width={600} height={400} />
          <Image src="/pictures/reel-3.jpg" alt="Reel visual 2" width={600} height={400} />
          <Image src="/pictures/reel-2.jpg" alt="Reel visual 3" width={600} height={400} />
          <Image src="/pictures/reel-5.jpg" alt="Reel visual 4" width={600} height={400} />
          <Image src="/pictures/reel-4.jpg" alt="Reel visual 5" width={600} height={400} />
          <Image src="/pictures/reel-6.jpg" alt="Reel visual 6" width={600} height={400} />
          <Image
            src="/pictures/LM-Socials-Garage-Day-2.jpg"
            alt="Reel visual 7"
            width={600}
            height={400}
          />
          <Image
            src="/pictures/Lm-second-day-socials-9.jpg"
            alt="Reel visual 8"
            width={600}
            height={400}
          />
          <Image
            src="/pictures/LM-Socials-Garage-Day-1.jpg"
            alt="Reel visual 9"
            width={600}
            height={400}
          />
        </div>
      </section>

      {/* Credits Section */}
      <section className="credits">
        <h2>Credits</h2>
        <div className="credits__grid">
          {[0, 1, 2].map((row) => (
            <div className="credits__row" key={row}>
              {credits.slice(row * 5, row * 5 + 5).map((credit, i) => (
                <div className="credit" key={i}>
                  <span className="credit__role">{credit.role}</span>
                  <span className="credit__name">
                    {credit.name.split('\n').map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="inspiration">
        <h2 className="inspiration__title">INSPIRATION</h2>
        <div className="inspiration__grid">
          <Image
            src="/pictures/inspo1.png"
            alt="mood board 1"
            className="inspiration__image"
            width={400}
            height={400}
          />
          <Image
            src="/pictures/inspo2.png"
            alt="mood board 2"
            className="inspiration__image"
            width={400}
            height={400}
          />
          <Image
            src="/pictures/inspo5.png"
            alt="mood board 3"
            className="inspiration__image"
            width={400}
            height={400}
          />
          <Image
            src="/pictures/inspo6.png"
            alt="mood board 4"
            className="inspiration__image"
            width={400}
            height={400}
          />
        </div>
      </section>

      <footer className="project-footer">
        <div className="project-footer__nav">
          <Link
            href="/projects/lemon-meringue"
            className="project-footer__arrow"
            data-cursor="prev"
          >
            ←
          </Link>
          <div className="project-footer__center">
            <h3 className="project-footer__label">CHOOSE ONE</h3>
          </div>
          <Link href="/projects/cgkm-terminal" className="project-footer__arrow" data-cursor="next">
            →
          </Link>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="video-modal">
          <div className="video-modal__content">
            <button
              className="video-modal__close"
              onClick={() => setIsModalOpen(false)}
              data-cursor="close"
            >
              &times;
            </button>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video className="video-modal__video" controls autoPlay>
              <source src="/videos/smirkreel3.mp4" type="video/mp4" />
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            className="cursor-play"
            style={{ zIndex: 9999, position: 'fixed', pointerEvents: 'none' }}
          />
        </div>
      )}
      <Cursor />

      {/* Styles */}
      <style jsx>{`
        .lemon-meringue-page {
          font-family: 'Bebas Neue';
          color: #000;
          background-color: #fff;
        }

        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero__video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          cursor: none;
        }

        .hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8));
          z-index: 2;
        }

        .hero__content {
          position: relative;
          z-index: 3;
          text-align: left;
          padding: 0 5%;
        }

        .hero__title {
          font-size: 4rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
        }

        .hero__subtitle {
          font-size: 1.25rem;
          color: #ddd;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }

        .hero__play {
          background: transparent;
          border: none;
          color: #f5c242;
          font-size: 1.25rem;
          font-weight: bold;
          cursor: pointer;
          padding: 0;
          transition: transform 0.3s ease, color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .hero__play:hover {
          color: #fff;
          transform: translateX(5px);
        }

        .description {
          background: #000;
          padding: 1rem 1rem;
          color: #fff;
        }

        .description__wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto 3rem auto;
        }

        .description__media {
          flex: 1;
          min-width: 250px;
          max-width: 300px;
        }

        .description__video,
        .description__image {
          width: 100%;
          border-radius: 10px;
          object-fit: cover;
        }

        .description__container {
          flex: 2;
          min-width: 300px;
          font-size: 1.125rem;
          line-height: 1.8;
          color: #fff;
        }

        .description__gallery {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          max-width: 900px;
          margin: 0 auto;
        }

        .description__gallery img {
          width: 28%;
          min-width: 200px;
          border-radius: 10px;
          object-fit: cover;
        }

        .credits {
          padding: 5rem 1rem;
          background: #000;
          color: #fff;
          text-align: center;
        }

        .credits h2 {
          font-size: 2rem;
          margin-bottom: 3rem;
        }

        .credits__grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          justify-content: center;
          align-items: center;
        }

        .credits__row {
          display: flex;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: nowrap;
          max-width: 100%;
          width: 100%;
          padding: 0 2rem;
        }

        .credit {
          flex: 1 1 18%;
          min-width: 150px;
        }

        .credit__role {
          font-family: 'Calibre', sans-serif;
          display: block;
          font-weight: 700;
          font-size: 1.25rem;
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .credit__name {
          font-family: 'Calibre', sans-serif;
          font-size: 1.5rem;
          line-height: 1.25;
          font-weight: 400;
        }

        .project-footer {
          background: #f5c242;
          color: #000;
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .project-footer__nav {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 960px;
          align-items: center;
        }

        .project-footer__arrow {
          font-size: 2.5rem;
          cursor: pointer;
        }

        .project-footer__center {
          text-align: center;
        }

        .project-footer__label {
          font-weight: 800;
          font-size: 1.5rem;
          margin: 0;
        }

        .video-modal {
          position: fixed;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.95);
          z-index: 9999;
        }

        .video-modal__content {
          position: relative;
          width: 90%;
          max-width: 960px;
        }

        .video-modal__video {
          width: 100%;
          border-radius: 10px;
          background: #000;
        }

        .video-modal__close {
          position: absolute;
          top: -40px;
          right: -10px;
          font-size: 2.5rem;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
        }

        .cursor-play {
          position: fixed;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 10001;
          display: none;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: bold;
          color: #f5c242;
          font-family: inherit;
          background: none;
          border: none;
          outline: none !important;
          box-shadow: none !important;
          gap: 0.5rem;
          transition: transform 0.2s ease, opacity 0.2s ease;
          mix-blend-mode: difference;
        }

        .cursor-play::after {
          all: unset;
          content: 'Play ▶';
          pointer-events: none;
          display: inline-block;
          color: #f5c242;
          font-size: 1.25rem;
          font-weight: bold;
          background: transparent;
        }

        .hero:hover ~ .cursor-play {
          background: none;
          box-shadow: none;
        }

        .inspiration {
          margin-top: 0rem;
          padding: 2rem 1rem;
          text-align: center;
          background-color: black;
          color: white;
        }

        .inspiration__title {
          font-family: 'Calibre', sans-serif;
          font-weight: 700;
          font-size: 2rem;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }

        .inspiration__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1rem;
          justify-items: center;
          align-items: center.;
        }

        .inspiration__image {
          width: 100%;
          height: auto;
          max-width: 240px;
          border-radius: 4px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s ease.;
        }

        .inspiration__image:hover {
          transform: scale(1.03);
        }

        @media (max-width: 600px) {
          .hero__title {
            font-size: 2.5rem;
          }

          .description__container {
            font-size: 1rem;
          }

          .credits__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default FahReel;
