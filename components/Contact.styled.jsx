import styled from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import { large, mediumA } from '../theme/GlobalFonts';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';

// Contact Container
export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

// Contact Column
export const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Contact Title
export const ContactTitle = styled(large)`
  max-width: 490px;

  margin-bottom: 129px;

  @media (max-width: 1650px) {
    max-width: 440px;
  }
  @media (max-width: ${media.laptopL}) {
    margin-bottom: 79px;
  }
  @media (max-width: ${media.laptopM}) {
    max-width: 400px;
    margin-bottom: 85px;
  }
  @media (max-width: ${media.laptopS}) {
    max-width: 360px;
    margin-bottom: 65px;
  }
  @media (max-width: ${media.tablet}) {
    max-width: 300px;
  }
  @media (max-width: ${media.between}) {
    max-width: 250px;
  }
  @media (max-width: ${media.mobileL}) {
    max-width: 220px;
  }
  @media (max-width: ${media.mobileM}) {
    max-width: 190px;
  }
`;

// Contact CTA
export const ContactButton = styled(mediumA)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${color.$gold};

  height: 100px;
  width: 335px;

  font-size: ${typeface.$md};
  font-weight: ${typeface.$thin};
  color: ${color.$black};

  &:hover {
    background-color: ${color.$green};
    color: ${color.$white};
  }

  transition: background-color 350ms ease-in-out, color 350ms ease-in-out;

  @media (max-width: ${media.laptopS}) {
    height: 80px;
    width: 305px;
  }
  @media (max-width: ${media.tablet}) {
    height: 80px;
    width: 275px;
  }
  @media (max-width: ${media.between}) {
    font-size: ${typeface.$sm};
    height: 70px;
    width: 235px;
  }
  @media (max-width: ${media.mobileL}) {
    height: 70px;
    width: 200px;
  }
  @media (max-width: ${media.mobileM}) {
    height: 70px;
    width: 185px;
  }
`;

// Contact Image
export const ContactImage = styled.div`
  height: 414px;
  width: 500px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${media.laptopL}) {
    height: 364px;
    width: 450px;
  }
  @media (max-width: ${media.laptopM}) {
    height: 314px;
    width: 400px;
  }
  @media (max-width: ${media.laptopS}) {
    height: 274px;
    width: 360px;
  }
  @media (max-width: 910px) {
    display: none;
  }
`;
