import React from 'react';
import {
  ProjectsBackground,
  ProjectsBox,
  ProjectsContainer,
  ProjectsDiv,
  ProjectsSlogan,
  ProjectsTitle,
} from './Projects.styled';
import * as color from '../theme/GlobalColors';

export const Projects = () => {
  return (
    <ProjectsContainer id="work">
      <ProjectsDiv>
        <ProjectsBox style={{ backgroundImage: `url('/Baugedanke.svg')` }}>
          <ProjectsBackground>
            <ProjectsTitle>Baugedanke</ProjectsTitle>
          </ProjectsBackground>
          <ProjectsBackground>
            <ProjectsSlogan>Gedacht. Geplant. Gebaut.</ProjectsSlogan>
          </ProjectsBackground>
        </ProjectsBox>
        <ProjectsBox style={{ backgroundImage: `url('/Paragon.svg')` }}>
          <ProjectsBackground>
            <ProjectsTitle>Paragon</ProjectsTitle>
          </ProjectsBackground>
          <ProjectsBackground>
            <ProjectsSlogan>Stand Out From The Crowd.</ProjectsSlogan>
          </ProjectsBackground>
        </ProjectsBox>
        <ProjectsBox style={{ backgroundImage: `url('/ComingSoon.svg')` }}>
          <ProjectsBackground>
            <ProjectsTitle>Coming Soon</ProjectsTitle>
          </ProjectsBackground>
          <ProjectsBackground>
            <ProjectsSlogan>Cool Slogan Should Be Here.</ProjectsSlogan>
          </ProjectsBackground>
        </ProjectsBox>
      </ProjectsDiv>
    </ProjectsContainer>
  );
};
