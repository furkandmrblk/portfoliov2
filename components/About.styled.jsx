import styled from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import { medium } from '../theme/GlobalFonts';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';

// About Container
export const AboutContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 23.4375rem 9.6875rem 11.28125rem 9.6875rem;

  @media (max-width: ${media.laptopL}) {
    padding: 23.4375rem 6.6875rem 11.28125rem 6.6875rem;
  }
  @media (max-width: ${media.laptopS}) {
    padding: 23.4375rem 4.6875rem 11.28125rem 4.6875rem;
  }
  @media (max-width: ${media.tablet}) {
    padding: 23.4375rem 3.6875rem 11.28125rem 3.6875rem;
  }
  @media (max-width: ${media.between}) {
    padding: 23.4375rem 2.6875rem 11.28125rem 2.6875rem;
  }
`;

// About Text
export const AboutText = styled(medium)`
  max-width: 34.625rem;

  @media (max-width: ${media.mobileL}) {
    max-width: 13.625rem;
  }
`;
