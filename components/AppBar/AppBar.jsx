import React from 'react';
import Link from 'next/link';
import MenuButton from '../MenuButton';
import { Slider, Container, StyledLink, MenuWrapper } from './styles';

const getStyles = (direction = '') => {
  if (direction === 'down') return { top: 0 };
  if (direction === 'up') return { bottom: 0 };
  return {};
};

const variants = {
  hidden: { y: -131 },
  show: { y: 0 },
};

const AppBar = (props) => {
  const { direction = 'down', offset = 105, style: styleProp = {}, ...rootProps } = props;

  const [hidden, setHidden] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      let shouldHide = false;
      let intersection = offset;
      let currentYPosition = window.scrollY;

      shouldHide = currentYPosition > intersection;

      if (shouldHide !== hidden) {
        setHidden(shouldHide);
      }

      setScrolled(currentYPosition > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, false);
    return () => window.removeEventListener('scroll', handleScroll, false);
  }, [hidden, offset]);

  const styles = getStyles(direction);

  return (
    <Slider
      variants={variants}
      initial="hidden"
      animate={hidden ? 'hidden' : 'show'}
      transition={{
        duration: 1,
        ease: [0.666, 0, 0.237, 1],
      }}
      style={{
        ...styles,
        ...styleProp,
      }}
      {...rootProps}
    >
      <Container>
        <Link href="/" passHref>
          <StyledLink title="SMiRK">
            <span
              className="smirk-logo"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              SM
              <span className="logo-i">
                <span
                  className={`logo-dot ${hovered ? 'bounce' : ''}`}
                  style={{
                    backgroundColor: scrolled ? '#ED732E' : '#F5C242',
                  }}
                />
                i
              </span>
              RK
            </span>
          </StyledLink>
        </Link>
        <MenuWrapper>
          <MenuButton title="Projects" />
        </MenuWrapper>
      </Container>

      <style jsx>{`
        .smirk-logo {
          font-family: 'calibre', sans-se;
          font-size: 2.5rem;
          font-weight: 900;
          color: white;
          display: inline-flex;
          align-items: baseline;
        }

        .logo-i {
          position: relative;
          display: inline-block;
          width: 0.5ch;
        }

        .logo-dot {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 50%;
          width: 0.4em;
          height: 0.4em;
          border-radius: 50%;
          background-color: #f5c242;
          transform: translateX(-50%);
          transition: background-color 0.3s ease;
        }

        .bounce {
          animation: bounce-dot 0.6s ease-in-out infinite;
        }

        @keyframes bounce-dot {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-6px);
          }
        }
      `}</style>
    </Slider>
  );
};

export default React.memo(AppBar);
