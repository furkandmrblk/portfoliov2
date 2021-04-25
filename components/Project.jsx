import React from 'react';
import {
  ProjectArrow,
  ProjectBackground,
  ProjectBackground2,
  ProjectBigImage,
  ProjectBigText,
  ProjectColumn,
  ProjectColumnHero,
  ProjectContainer,
  ProjectCTA,
  ProjectCTADiv,
  ProjectDescription,
  ProjectImage,
  ProjectRow,
  ProjectText,
  ProjectTextTitle,
  ProjectTitle,
  ProjectVerticalImage,
} from './Project.styled';

export const Project = () => {
  return (
    <ProjectContainer>
      <ProjectBackground />
      <ProjectRow style={{ marginBottom: '0' }}>
        <ProjectColumn>
          <ProjectTitle>Project Title</ProjectTitle>
          <ProjectDescription>
            Project Description will be placed here
          </ProjectDescription>
        </ProjectColumn>
      </ProjectRow>
      <ProjectRow>
        <ProjectColumn>
          <ProjectCTADiv>
            <ProjectCTA>Visit Website</ProjectCTA>
            <ProjectArrow />
          </ProjectCTADiv>
          <ProjectTextTitle>The Challenge</ProjectTextTitle>
          <ProjectText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </ProjectText>
        </ProjectColumn>
        <ProjectImage />
      </ProjectRow>
      <ProjectRow>
        <ProjectColumnHero>
          <ProjectTextTitle>The Solution</ProjectTextTitle>
          <ProjectText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </ProjectText>
        </ProjectColumnHero>
        <ProjectBackground2 />
      </ProjectRow>
      <ProjectBigImage />
      <ProjectRow>
        <ProjectColumn>
          <ProjectTextTitle>The Process</ProjectTextTitle>
          <ProjectBigText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum.
          </ProjectBigText>
        </ProjectColumn>
      </ProjectRow>
      <ProjectRow>
        <ProjectVerticalImage />
        <ProjectColumn>
          <ProjectTextTitle>Lorem Ipsum</ProjectTextTitle>
          <ProjectText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </ProjectText>
        </ProjectColumn>
      </ProjectRow>
      <ProjectRow>
        <ProjectColumn>
          <ProjectTextTitle>Lorem Ipsum</ProjectTextTitle>
          <ProjectText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </ProjectText>
        </ProjectColumn>
        <ProjectVerticalImage />
      </ProjectRow>
      <ProjectRow>
        <ProjectVerticalImage />
        <ProjectColumn>
          <ProjectTextTitle>Lorem Ipsum</ProjectTextTitle>
          <ProjectText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </ProjectText>
        </ProjectColumn>
      </ProjectRow>
      <ProjectRow>
        <ProjectColumn>
          <ProjectTextTitle>Lorem Ipsum</ProjectTextTitle>
          <ProjectText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </ProjectText>
        </ProjectColumn>
        <ProjectVerticalImage />
      </ProjectRow>
    </ProjectContainer>
  );
};
