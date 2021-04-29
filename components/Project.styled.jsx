import styled from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import { small, large } from '../theme/GlobalFonts';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';

// Project Container
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 11.4375rem 9.6875rem;

  @media (max-width: ${media.laptopL}) {
    padding: 11.4375rem 6.6875rem;
  }
  @media (max-width: ${media.laptopS}) {
    padding: 11.4375rem 4.6875rem;
  }
  @media (max-width: ${media.tablet}) {
    padding: 11.4375rem 3.6875rem;
  }
  @media (max-width: ${media.between}) {
    padding: 11.4375rem 2.6875rem;
  }
  @media (max-width: ${media.mobileM}) {
    padding: 11.4375rem 1.6875rem;
  }
`;

// Project Row & Column
export const ProjectRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;

  margin-bottom: 5rem;

  @media (max-width: ${media.tablet}) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const ProjectRowHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;

  margin-bottom: 5rem;

  @media (max-width: ${media.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProjectColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${media.tablet}) {
    order: 2;
  }
`;

export const ProjectColumnHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 336px;
`;

// Project Backgrounds
export const ProjectBackground = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;

  height: 534px;
  width: 1248px;
`;

export const ProjectBackground2 = styled.div`
  z-index: -1;
  position: absolute;
  right: 0;

  height: 336px;
  width: 880px;

  @media (max-width: ${media.desktop}) {
    width: 810px;
  }
  @media (max-width: ${media.laptopL}) {
    width: 634px;
  }
  @media (max-width: ${media.laptopM}) {
    width: 534px;
  }
  @media (max-width: ${media.laptopS}) {
    width: 432px;
  }
  @media (max-width: ${media.tablet}) {
    left: 0;
    margin-top: 25rem;
    width: 410px;
  }
`;

// Project Title, Description & CTA
export const ProjectTitle = styled(large)`
  margin-bottom: 1rem;
`;

export const ProjectDescription = styled(small)`
  margin-bottom: 3rem;
`;

export const ProjectCTA = styled(small)`
  margin-top: 6rem;
  margin-bottom: 6rem;

  @media (max-width: ${media.tablet}) {
    color: ${color.$black}!important;

    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

export const ProjectCTADiv = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 9rem;

  cursor: pointer;

  svg {
    height: 0.75rem;
    width: 21px;
  }

  @media (max-width: ${media.tablet}) {
    width: 8rem;
    svg {
      path {
        stroke: ${color.$black}!important;
      }
    }
  }
`;

// Project TextTitle & Text
export const ProjectTextTitle = styled(small)`
  color: #000;

  margin-bottom: 1rem;
`;

export const ProjectText = styled(small)`
  color: #000;
  max-width: 450px;

  text-align: justify;

  @media (max-width: ${media.laptopL}) {
    max-width: 350px;
  }
  @media (max-width: ${media.laptopS}) {
    max-width: 220px;
  }
  @media (max-width: ${media.tablet}) {
    max-width: 350px;
  }
`;

export const ProjectBigText = styled(small)`
  color: #000;
  max-width: 640px;

  text-align: justify;
`;

// Project Image & Big Image
export const ProjectImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 423px;
  width: 724px;

  @media (max-width: ${media.desktop}) {
    height: 363px;
    width: 654px;
  }
  @media (max-width: ${media.laptopL}) {
    height: 363px;
    width: 524px;
  }
  @media (max-width: ${media.laptopM}) {
    height: 263px;
    width: 424px;
  }
  @media (max-width: ${media.laptopS}) {
    height: 253px;
    width: 354px;
  }
  @media (max-width: ${media.tablet}) {
    order: 1;
  }
  @media (max-width: ${media.between}) {
    height: 203px;
    width: 304px;
  }
  @media (max-width: ${media.mobileL}) {
    height: 203px;
    width: 100%;
  }
`;

export const ProjectBigImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 633px;
  width: 100%;

  margin-bottom: 5rem;

  @media (max-width: ${media.laptopL}) {
    height: 533px;
  }
  @media (max-width: ${media.laptopM}) {
    height: 493px;
  }
  @media (max-width: ${media.tablet}) {
    height: 333px;
    margin-bottom: 2.5rem;
  }
  @media (max-width: ${media.between}) {
    height: 233px;
  }
`;

export const ProjectVerticalImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 633px;
  width: 533px;

  @media (max-width: ${media.laptopM}) {
    height: 433px;
    width: 333px;
  }
  @media (max-width: ${media.tablet}) {
    order: 1;

    margin-bottom: 2.5rem;
  }
  @media (max-width: ${media.between}) {
    height: 413px;
    width: 318px;
  }
  @media (max-width: ${media.mobileL}) {
    height: 373px;
    width: 100%;
  }
  @media (max-width: ${media.mobileM}) {
    height: 333px;
  }
  @media (max-width: ${media.mobileS}) {
    height: 303px;
  }
`;
