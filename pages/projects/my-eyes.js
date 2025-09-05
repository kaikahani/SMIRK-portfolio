import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Cursor from '../../components/Cursor'; // Adjust path if needed

export async function getStaticProps() {
  return {
    props: { customTitle: 'Photography 📸 SMiRK' },
  };
}

const IMAGES = Array.from({ length: 30 }, (_, i) => `/pictures/photo${i + 1}.jpg`);

const MyEyes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show custom cursor over grid; keep it visible while modal is open
  useEffect(() => {
    const cursor = document.querySelector('.cursor-play');
    const grid = document.querySelector('.photo-grid');
    if (!cursor || !grid) return;

    const show = () => {
      cursor.style.display = 'flex';
    };
    const hide = () => {
      if (!isModalOpen) cursor.style.display = 'none';
    };
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    grid.addEventListener('mouseenter', show);
    grid.addEventListener('mouseleave', hide);
    document.addEventListener('mousemove', moveCursor);

    // Force cursor visible when modal is open
    if (isModalOpen) {
      document.body.classList.add('has-photo-modal');
      cursor.style.display = 'flex';
    } else {
      document.body.classList.remove('has-photo-modal');
    }

    return () => {
      grid.removeEventListener('mouseenter', show);
      grid.removeEventListener('mouseleave', hide);
      document.removeEventListener('mousemove', moveCursor);
      document.body.classList.remove('has-photo-modal');
    };
  }, [isModalOpen]);

  const openModal = useCallback((idx) => {
    setCurrentIndex(idx);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % IMAGES.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  // Keyboard controls for modal
  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isModalOpen, closeModal, nextImage, prevImage]);

  return (
    <div className="photography-page">
      <Head>
        <title>Photography | SMiRK</title>
      </Head>

      {/* Top Description */}
      <section className="description-top">
        <h1 className="description-title">MY EYES</h1>
        <p className="description-text">A curated selection of moments from my lens.</p>
      </section>

      {/* Photo Grid */}
      <section className="photo-grid" aria-label="Photo gallery">
        {IMAGES.map((src, i) => (
          <button
            key={i}
            className="photo-item"
            onClick={() => openModal(i)}
            aria-label={`Open photo ${i + 1}`}
          >
            <Image src={src} alt={`Photography ${i + 1}`} width={600} height={400} loading="lazy" />
          </button>
        ))}
      </section>

      {/* Footer Navigation */}
      <footer className="project-footer">
        <div className="project-footer__nav">
          <Link href="/projects/cgkm-terminal" className="project-footer__arrow" data-cursor="prev">
            0
          </Link>
          <div className="project-footer__center">
            <h3 className="project-footer__label">CHOOSE ONE</h3>
          </div>
          <Link href="/projects/kill-monotony" className="project-footer__arrow" data-cursor="next">
            2
          </Link>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="photo-modal" role="dialog" aria-modal="true">
          <button className="photo-modal__close" onClick={closeModal} aria-label="Close">
            ×
          </button>
          <button
            className="photo-modal__nav photo-modal__nav--prev"
            onClick={prevImage}
            aria-label="Previous"
          >
            ‹
          </button>
          <Image
            className="photo-modal__img"
            src={IMAGES[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            width={600}
            height={400}
          />
          <button
            className="photo-modal__nav photo-modal__nav--next"
            onClick={nextImage}
            aria-label="Next"
          >
            ›
          </button>
          <div className="photo-modal__count">
            {currentIndex + 1} / {IMAGES.length}
          </div>
        </div>
      )}

      {/* Custom cursor that says "View" */}
      <div className="cursor-play" />

      <Cursor />

      <style jsx>{`
        .photography-page {
          font-family: 'Bebas Neue';
          background-color: #000;
          color: #fff;
          min-height: 100vh;
        }

        .description-top {
          max-width: 900px;
          margin: 2rem auto;
          padding: 0 1rem;
          text-align: center;
        }

        .description-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .description-text {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #fff;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
          padding: 2rem;
          max-width: 1600px;
          margin: 0 auto;
        }

        .photo-item {
          padding: 0;
          border: 0;
          background: transparent;
          display: block;
          width: 100%;
          cursor: none; /* hide native cursor over grid */
        }

        .photo-item img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: 6px;
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

        /* Modal */
        .photo-modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          display: grid;
          place-items: center;
          z-index: 10000; /* cursor sits above with higher z-index */
        }

        .photo-modal__img {
          max-width: 90vw;
          max-height: 85vh;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
          border-radius: 8px;
          user-select: none;
          -webkit-user-drag: none;
        }

        .photo-modal__close {
          position: fixed;
          top: 16px;
          right: 20px;
          font-size: 2.25rem;
          line-height: 1;
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        .photo-modal__nav {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          font-size: 3rem;
          background: rgba(0, 0, 0, 0.4);
          border: 0;
          color: #fff;
          width: 56px;
          height: 56px;
          border-radius: 999px;
          cursor: pointer;
          display: grid;
          place-items: center;
        }

        .photo-modal__nav--prev {
          left: 20px;
        }
        .photo-modal__nav--next {
          right: 20px;
        }

        .photo-modal__count {
          position: fixed;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          color: #bbb;
          font-size: 0.95rem;
          letter-spacing: 0.08em;
        }

        /* Custom "View" cursor */
        .cursor-play {
          position: fixed;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 999999;
          display: none;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 700;
          color: #f5c242;
          mix-blend-mode: difference;
        }
        .cursor-play::after {
          content: 'View';
          color: #f5c242;
          font-size: 1.1rem;
        }

        /* Force cursor visible while modal is open */
        :global(body.has-photo-modal) .cursor-play {
          display: flex !important;
        }

        @media (max-width: 1024px) {
          .photo-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 600px) {
          .photo-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default MyEyes;
