import styled from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';

// About Container
export const AboutContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 23.4375rem 9.6875rem;
`;

// About Text
export const AboutText = styled.h3`
  font-size: ${typeface.$md};
  max-width: 34.625rem;
`;
