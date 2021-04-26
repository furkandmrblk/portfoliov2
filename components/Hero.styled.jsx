import styled, { keyframes } from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';
import { motion } from 'framer-motion';

// Hero Container
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 100vh;

  padding: 0 9.6875rem;
`;

export const HeroRow = styled.div`
  z-index: -2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 72vh;
  width: 100%;

  background-color: #202021;

  padding: 5rem 10rem;
`;

// Hero Left
export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 50%;
`;

// Hero Right
export const HeroRight = styled.div`
  z-index: -1;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  height: 23.0625rem;
  width: 50%;
`;

// Hero Title
export const HeroTitle = styled(motion.h2)`
  font-size: ${typeface.$lg};

  color: ${color.$white};

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

// Animations
const Block = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Block2 = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Hero Visuals/Graphics
export const HeroVisualColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 23.0625rem;
  width: 15rem;

  margin-left: 1.75rem;
`;

export const HeroVisualDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  height: 23.0625rem;
  width: 7.5rem;
`;

export const HeroVisualRedBlock1 = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;
  bottom: 0;

  height: 357px;
  width: 100px;
  border-radius: 0 0 0 20px;
  background-color: ${color.$black};

  animation: ${Block} 4s linear infinite;

  margin: 0 0 12px 12px;
`;

export const HeroVisualRedBlock2 = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;

  height: 100px;
  width: 100px;
  border-radius: 0 0 20px 0;
  background-color: ${color.$black};

  animation: ${Block} 4s linear infinite;

  margin: 0 0 22px 12px;
`;

export const HeroVisualRedBlock3 = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;
  bottom: 0;

  height: 100px;
  width: 229px;
  border-radius: 0 0 20px 0;
  background-color: ${color.$black};

  animation: ${Block} 4s linear infinite;

  margin: 0 0 12px 12px;
`;

export const HeroVisualBlackBlock1 = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;
  bottom: 0;

  height: 357px;
  width: 100px;
  border-radius: 0 0 0 20px;
  background-color: ${color.$crimson};

  animation: ${Block2} 4s linear infinite;
`;

export const HeroVisualBlackBlock2 = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;

  height: 100px;
  width: 100px;
  border-radius: 0 0 20px 0;
  background-color: ${color.$crimson};

  animation: ${Block2} 4s linear infinite;
`;

export const HeroVisualBlackBlock3 = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;
  bottom: 0;

  height: 100px;
  width: 229px;
  border-radius: 0 0 20px 0;
  background-color: ${color.$crimson};

  animation: ${Block2} 4s linear infinite;
`;

// Hero Scroll

export const HeroScroll = styled.h3`
  font-size: ${typeface.$sm};
`;

export const HeroScrollArrow = styled.div`
  height: 0.5rem;
  width: 1rem;

  background-image: url('/HeroScrollArrow.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeroScrollDiv = styled(motion.div)`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 9rem;

  cursor: pointer;

  margin-bottom: 2rem;
`;
