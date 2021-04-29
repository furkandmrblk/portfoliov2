import styled from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import { medium, smallA, extrasmall } from '../theme/GlobalFonts';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';

// Footer Container
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background-color: ${color.$black};

  margin-top: 11.28125rem;
  padding: 10rem 9.6875rem 7.5rem 9.6875rem;

  @media (max-width: ${media.laptopL}) {
    padding: 10rem 6.6875rem 7.5rem 6.6875rem;
  }
  @media (max-width: ${media.laptopS}) {
    padding: 10rem 4.6875rem 7.5rem 4.6875rem;
  }
  @media (max-width: ${media.tablet}) {
    padding: 10rem 3.6875rem 7.5rem 3.6875rem;
  }
  @media (max-width: ${media.between}) {
    padding: 10rem 2.6875rem 7.5rem 2.6875rem;
  }
  @media (max-width: ${media.mobileM}) {
    padding: 10rem 1.6875rem 7.5rem 1.6875rem;
  }
`;

// Footer Div
export const FooterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;

  color: ${color.$white};
`;

// Footer Title
export const FooterTitle = styled(medium)`
  margin-bottom: 2rem;

  @media (max-width: ${media.mobileL}) {
    font-weight: ${typeface.$regular};
  }
`;

// Footer Item
export const FooterItem = styled(smallA)`
  font-weight: ${typeface.$thin};
  color: ${color.$white};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  cursor: pointer;

  &:hover {
    color: ${color.$gold};
  }

  transition: color 350ms ease-in-out;
`;

export const FooterItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 2.5rem 2.5rem 2.5rem;

  @media (max-width: ${media.mobileL}) {
    margin: 0 1.5rem 1.5rem 1.5rem;
  }
  @media (max-width: ${media.mobileM}) {
    margin: 0 0.9rem 1.5rem 0.9rem;
  }
`;

// Footer Info
export const FooterInfo = styled(extrasmall)`
  color: ${color.$white};

  margin-top: 10rem;
  margin-left: 2.5rem;

  @media (max-width: ${media.mobileL}) {
    margin-left: 1.5rem;
  }
  @media (max-width: ${media.mobileM}) {
    margin-left: 0.9rem;
  }
`;
