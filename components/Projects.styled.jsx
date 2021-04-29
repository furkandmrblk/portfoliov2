import styled from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import { small, extrasmall } from '../theme/GlobalFonts';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';

// Projects Container
export const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;

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

export const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  background-color: ${color.$black};

  padding: 8rem;

  @media (max-width: ${media.laptopL}) {
    padding: 4rem;
  }
  @media (max-width: ${media.tablet}) {
    padding: 2.5rem;
  }
  @media (max-width: ${media.between}) {
    padding: 1.5rem;
  }
`;

//  Projects Box, Title, Slogan, Background
export const ProjectsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  height: 700px;
  width: 100%;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 5rem;
  }

  padding: 2rem;

  @media (max-width: ${media.laptopL}) {
    height: 500px;
    padding: 1rem;
  }
  @media (max-width: ${media.laptopM}) {
    height: 400px;

    &:not(:last-child) {
      margin-bottom: 4rem;
    }
  }
  @media (max-width: ${media.laptopS}) {
    height: 350px;
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
  @media (max-width: ${media.laptopS}) {
    height: 300px;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
  @media (max-width: ${media.between}) {
    height: 250px;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

export const ProjectsTitle = styled(small)`
  color: ${color.$white};
`;

export const ProjectsSlogan = styled(extrasmall)`
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

  @media (max-width: ${media.laptopS}) {
    padding: 0.5rem 1rem;
  }
`;
