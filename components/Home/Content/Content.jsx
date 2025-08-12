import React from 'react';
import AnimateOnScreen from '../../AnimateOnScreen';
import { ContentSection, TextWrapper, Text } from './styles';

const Content = () => {
  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <Text>
            We have to kill monotony—
            <br />
            before it destroys our creativity.
            <br />
            It&apos;s everywhere. Polished sameness masquerading as genius. We&apos;re not
            here for formulas. We&apos;re here to inspire.
            <br />
            <br />
            Let&apos;s build something unforgettable.
          </Text>
        </TextWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default Content;
