import styled from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';

// Quote Container
export const QuoteContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  padding: 11.28125rem 9.6875rem;
`;

// Quote Background Block
export const QuoteBackgroundBlock = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;

  height: 573px;
  width: 785px;

  background-color: ${color.$crimson};
`;

// Quote Div
export const QuoteDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 573px;
`;

// Quote Text
export const QuoteText = styled.h2`
  font-size: ${typeface.$lg};
  color: ${color.$white};

  max-width: 370px;
`;
