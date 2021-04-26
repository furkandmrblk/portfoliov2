import React from 'react';
import Link from 'next/link';
import {
  ProjectsBackground,
  ProjectsBox,
  ProjectsContainer,
  ProjectsDiv,
  ProjectsSlogan,
  ProjectsTitle,
} from './Projects.styled';
import * as color from '../theme/GlobalColors';

export const Projects = (props) => {
  const data = props.props;

  return (
    <ProjectsContainer id="work">
      <ProjectsDiv>
        {data.map((project) => (
          <Link key={project.sys.id} href={project.fields.slug}>
            <ProjectsBox
              style={{
                backgroundImage: `url('https:${project.fields.projectImage.fields.file.url}')`,
              }}
            >
              <ProjectsBackground>
                <ProjectsTitle>{project.fields.projectTitle}</ProjectsTitle>
              </ProjectsBackground>
              <ProjectsBackground>
                <ProjectsSlogan>{project.fields.projectSlogan}</ProjectsSlogan>
              </ProjectsBackground>
            </ProjectsBox>
          </Link>
        ))}
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
