import React from 'react';
import useCursorStyle from '../../hooks/useCursorStyle';
import { Instagram, Facebook, Drive, YouTube } from '../Icons';
import StickyCursor from '../StickyCursor';
import { Container, Link } from './styles';
const medias = [
  { component: Instagram, url: 'https://www.instagram.com/smirk.cd/' },
  {
    component: Facebook,
    url: 'https://www.facebook.com/people/SMIRK-Creative-Studio/61579432040812/',
  },
  {
    component: Drive,
    url: 'https://drive.google.com/drive/folders/1xGuMGV209C2RwvI4rHSEFzBmCvTCqbzy?usp=sharing',
  },
  { component: YouTube, url: 'https://www.youtube.com/@SMiRK-CA' },
];
const SocialMedia = (props) => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <Container {...props}>
      {medias.map(({ component: Component, url }) => (
        <StickyCursor key={url}>
          <Link
            target="_blank"
            href={url}
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            <Component />
          </Link>
        </StickyCursor>
      ))}
    </Container>
  );
};
export default React.memo(SocialMedia);
