import styled from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';

// Contact Container
export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 23.4375rem 9.6875rem;
`;

// Contact Column
export const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Contact Title
export const ContactTitle = styled.h2`
  font-size: ${typeface.$lg};

  max-width: 500px;

  margin-bottom: 129px;
`;

// Contact CTA
export const ContactButton = styled.a`
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
    background-color: ${color.$crimson};
    color: ${color.$white};
  }

  transition: background-color 350ms ease-in-out, color 350ms ease-in-out;
`;

// Contact Image
export const ContactImage = styled.div`
  height: 414px;
  width: 500px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
