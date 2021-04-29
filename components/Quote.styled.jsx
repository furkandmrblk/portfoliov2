import styled from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import { large } from '../theme/GlobalFonts';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';

// Quote Container
export const QuoteContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  padding: 11.28125rem 9.6875rem;

  @media (max-width: ${media.laptopL}) {
    padding: 11.28125rem 6.6875rem;
  }
  @media (max-width: ${media.laptopS}) {
    padding: 11.28125rem 4.6875rem;
  }
  @media (max-width: ${media.tablet}) {
    padding: 11.28125rem 3.6875rem;
  }
  @media (max-width: ${media.between}) {
    padding: 11.28125rem 2.6875rem;
  }
  @media (max-width: ${media.mobileM}) {
    padding: 11.28125rem 1.6875rem;
  }
`;

// Quote Background Block
export const QuoteBackgroundBlock = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;

  height: 573px;
  width: 785px;

  background-color: ${color.$crimson};

  @media (max-width: ${media.laptopL}) {
    width: 655px;
  }
  @media (max-width: ${media.laptopM}) {
    height: 513px;
    width: 595px;
  }
  @media (max-width: ${media.laptopS}) {
    height: 473px;
    width: 505px;
  }
  @media (max-width: ${media.tablet}) {
    height: 373px;
    width: 405px;
  }
  @media (max-width: ${media.between}) {
    height: 293px;
    width: 305px;
  }
  @media (max-width: ${media.mobileL}) {
    height: 273px;
    width: 250px;
  }
  @media (max-width: ${media.mobileM}) {
    height: 253px;
    width: 195px;
  }
`;

// Quote Div
export const QuoteDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 573px;

  @media (max-width: ${media.laptopM}) {
    height: 513px;
  }
  @media (max-width: ${media.laptopS}) {
    height: 473px;
  }
  @media (max-width: ${media.tablet}) {
    height: 373px;
  }
  @media (max-width: ${media.between}) {
    height: 293px;
  }
  @media (max-width: ${media.mobileL}) {
    height: 273px;
  }
  @media (max-width: ${media.mobileM}) {
    height: 253px;
  }
`;

// Quote Text
export const QuoteText = styled(large)`
  color: ${color.$white};

  max-width: 370px;

  @media (max-width: ${media.laptopM}) {
    max-width: 300px;
  }
  @media (max-width: ${media.tablet}) {
    max-width: 210px;
  }
  @media (max-width: ${media.mobileL}) {
    max-width: 180px;
  }
  @media (max-width: ${media.mobileM}) {
    max-width: 150px;
  }
`;
