import styled, { keyframes } from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import { large, small } from '../theme/GlobalFonts';
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

  @media (max-width: ${media.laptopL}) {
    padding: 0 6.6875rem;
  }
  @media (max-width: ${media.laptopS}) {
    padding: 0 4.6875rem;
  }
  @media (max-width: ${media.tablet}) {
    padding: 3.125rem 3.6875rem;
  }
  @media (max-width: ${media.between}) {
    padding: 0 2.6875rem;
  }
  @media (max-width: ${media.mobileM}) {
    padding: 0 1.6875rem;
  }
`;

export const HeroRow = styled.div`
  z-index: -2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 72vh;
  width: 100%;

  background-color: #202021;

  padding: 5rem 8rem;

  @media (max-width: ${media.laptopL}) {
    height: 70vh;
    padding: 4rem;
  }
  @media (max-width: ${media.laptopS}) {
    flex-direction: column;
    align-items: flex-end;
  }
  @media (max-width: ${media.tablet}) {
    padding: 2.5rem;
  }
  @media (max-width: ${media.between}) {
    padding: 3rem 1.5rem;
  }
`;

// Hero Left
export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 60%;

  @media (max-width: ${media.laptopS}) {
    width: 100%;
    align-items: flex-start;
  }
`;

// Hero Right
export const HeroRight = styled.div`
  z-index: -1;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  height: 23.0625rem;
  width: 40%;

  @media (max-width: ${media.laptopS}) {
    width: 100%;
  }
  @media (max-width: ${media.between}) {
    justify-content: flex-start;
    align-items: flex-start;

    height: 18.0625rem;
  }
`;

// Hero Title
export const HeroTitle = styled(large)`
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

  @media (max-width: ${media.laptopM}) {
    margin-left: 0rem;
    width: 12rem;
  }
  @media (max-width: ${media.between}) {
    margin-left: 0rem;
    height: 18.0625rem;
    width: 9rem;
  }
`;

export const HeroVisualDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  height: 23.0625rem;
  width: 7.5rem;

  @media (max-width: ${media.laptopM}) {
    width: 6.25rem;
  }
  @media (max-width: ${media.between}) {
    height: 18.0625rem;
    width: 4.25rem;
  }
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

  @media (max-width: ${media.laptopM}) {
    height: 317px;
    width: 60px;
  }
  @media (max-width: ${media.between}) {
    height: 237px;
    width: 40px;

    margin: 0 0 10px 10px;
  }
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

  @media (max-width: ${media.laptopM}) {
    height: 60px;
    width: 60px;

    margin-top: 5rem;
  }
  @media (max-width: ${media.between}) {
    height: 40px;
    width: 40px;

    margin: 6rem 0 18px 10px;
  }
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

  @media (max-width: ${media.laptopM}) {
    height: 60px;
    width: 189px;
  }
  @media (max-width: ${media.between}) {
    height: 40px;
    width: 129px;

    margin: 0 0 10px 10px;
  }
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

  @media (max-width: ${media.laptopM}) {
    height: 317px;
    width: 60px;
  }
  @media (max-width: ${media.between}) {
    height: 237px;
    width: 40px;
  }
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

  @media (max-width: ${media.laptopM}) {
    height: 60px;
    width: 60px;

    margin-top: 5rem;
  }
  @media (max-width: ${media.between}) {
    height: 40px;
    width: 40px;

    margin-top: 6rem;
  }
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

  @media (max-width: ${media.laptopM}) {
    height: 60px;
    width: 189px;
  }
  @media (max-width: ${media.between}) {
    height: 40px;
    width: 129px;
  }
`;

// Hero Scroll

export const HeroScroll = styled(small)``;

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

  @media (max-width: ${media.between}) {
    width: 8rem;
  }
`;
