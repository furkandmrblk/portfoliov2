import styled from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';

// Projects Container
export const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 23.4375rem 9.6875rem;
`;

export const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  background-color: ${color.$black};

  padding: 10rem;
`;

//  Projects Box, Title, Slogan, Background
export const ProjectsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  height: 600px;
  width: 100%;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 5rem;
  }

  padding: 2rem;
`;

export const ProjectsTitle = styled.h2`
  font-size: ${typeface.$sm};
  color: ${color.$white};
`;

export const ProjectsSlogan = styled.h3`
  font-size: ${typeface.$xs};
  color: ${color.$white};
`;

export const ProjectsBackground = styled.div`
  height: 2rem;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 50px;

  padding: 0.5rem 2rem;

  margin-bottom: 0.5rem;
`;
