import styled from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
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
`;

// Footer Div
export const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;

  color: ${color.$white};
`;

// Footer Title
export const FooterTitle = styled.h2`
  font-size: ${typeface.$md};

  margin-bottom: 2rem;
`;

// Footer Item
export const FooterItem = styled.a`
  font-size: ${typeface.$sm};
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
`;

// Footer Info
export const FooterInfo = styled.h3`
  font-size: ${typeface.$xs};
  color: ${color.$white};

  margin-top: 10rem;
`;
