import styled from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';

// Project Container
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 11.4375rem 9.6875rem;
`;

// Project Row & Column
export const ProjectRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;

  margin-bottom: 5rem;
`;

export const ProjectColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  width: 865px;
`;

// Project Title, Description & CTA
export const ProjectTitle = styled.h2`
  font-size: ${typeface.$lg};
  color: ${color.$white};

  margin-bottom: 1rem;
`;

export const ProjectDescription = styled.h3`
  font-size: ${typeface.$sm};
  color: ${color.$white};

  margin-bottom: 3rem;
`;

export const ProjectCTA = styled.h3`
  font-size: ${typeface.$sm};
  color: ${color.$white};

  margin-top: 6rem;
  margin-bottom: 6rem;
`;

export const ProjectArrow = styled.div`
  height: 0.75rem;
  width: 21px;

  background-image: url('/WorkflowItemArrow.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ProjectCTADiv = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 9rem;

  cursor: pointer;
`;

// Project TextTitle & Text
export const ProjectTextTitle = styled.h2`
  font-size: ${typeface.$sm};

  margin-bottom: 1rem;
`;

export const ProjectText = styled.h3`
  font-size: ${typeface.$sm};
  max-width: 533px;

  text-align: justify;
`;

export const ProjectBigText = styled.h3`
  font-size: ${typeface.$sm};
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
`;

export const ProjectBigImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 633px;
  width: 100%;

  margin-bottom: 5rem;
`;

export const ProjectVerticalImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 633px;
  width: 533px;
`;
