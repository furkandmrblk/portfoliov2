import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  HeroBackgroundBlock,
  HeroContainer,
  HeroLeft,
  HeroRight,
  HeroRow,
  HeroScroll,
  HeroScrollArrow,
  HeroScrollDiv,
  HeroTitle,
  HeroVisualBlackBlock1,
  HeroVisualBlackBlock2,
  HeroVisualBlackBlock3,
  HeroVisualColumn,
  HeroVisualDiv,
  HeroVisualRedBlock1,
  HeroVisualRedBlock2,
  HeroVisualRedBlock3,
} from './Hero.styled';

export const Hero = (props) => {
  const data = props.props.fields;

  return (
    <HeroContainer>
      <HeroRow>
        <HeroLeft>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9, ease: 'easeOut' }}
          >
            {data.heroTitle}
          </HeroTitle>

          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
          >
            {data.heroTitle2}
          </HeroTitle>
          <HeroTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {data.heroTitle3}
          </HeroTitle>
        </HeroLeft>
        <HeroRight>
          <HeroVisualDiv>
            <HeroVisualBlackBlock1 />
            <HeroVisualRedBlock1 />
          </HeroVisualDiv>
          <HeroVisualColumn>
            <HeroVisualBlackBlock2 />
            <HeroVisualRedBlock2 />
            <HeroVisualBlackBlock3 />
            <HeroVisualRedBlock3 />
          </HeroVisualColumn>
        </HeroRight>
      </HeroRow>
      <Link href="/#about">
        <HeroScrollDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
        >
          <HeroScroll>SCROLL DOWN</HeroScroll>
          <HeroScrollArrow />
        </HeroScrollDiv>
      </Link>
    </HeroContainer>
  );
};
