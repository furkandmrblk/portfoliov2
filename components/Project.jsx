import React from 'react';
import Link from 'next/link';
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

export const Project = (props) => {
  const data = props.props.fields;

  return (
    <ProjectContainer>
      <ProjectBackground style={{ backgroundColor: `${data.color}` }} />
      <ProjectRow style={{ marginBottom: '0' }}>
        <ProjectColumn>
          <ProjectTitle>{data.projectTitle}</ProjectTitle>
          <ProjectDescription>{data.projectDescription}</ProjectDescription>
        </ProjectColumn>
      </ProjectRow>
      <ProjectRow>
        <ProjectColumn>
          <ProjectCTADiv href={data.projectCta} target="_blank">
            <ProjectCTA>Visit Website</ProjectCTA>
            <ProjectArrow />
          </ProjectCTADiv>

          {data.projectTextTitle && data.projectText && (
            <>
              <ProjectTextTitle>{data.projectTextTitle}</ProjectTextTitle>
              <ProjectText>
                {data.projectText
                  .replace(/\\n/g, ' ')
                  .split('\n')
                  .map((t, i) =>
                    i > 0 ? (
                      <span key={i}>
                        <br />
                        {t}
                      </span>
                    ) : (
                      t
                    )
                  )}
              </ProjectText>{' '}
            </>
          )}
        </ProjectColumn>
        {data.projectImage && (
          <ProjectImage
            style={{
              backgroundImage: `url('https:${data.projectImage.fields.file.url}')`,
            }}
          />
        )}
      </ProjectRow>
      <ProjectRow>
        <ProjectColumnHero>
          {data.projectTextTitle2 && data.projectText2 && (
            <>
              <ProjectTextTitle>{data.projectTextTitle2}</ProjectTextTitle>
              <ProjectText>
                {data.projectText2
                  .replace(/\\n/g, ' ')
                  .split('\n')
                  .map((t, i) =>
                    i > 0 ? (
                      <span key={i}>
                        <br />
                        {t}
                      </span>
                    ) : (
                      t
                    )
                  )}
              </ProjectText>{' '}
            </>
          )}
        </ProjectColumnHero>
        <ProjectBackground2 style={{ backgroundColor: `${data.color}` }} />
      </ProjectRow>
      {data.projectBigImage && (
        <ProjectBigImage
          style={{
            backgroundImage: `url('https:${data.projectBigImage.fields.file.url}')`,
          }}
        />
      )}
      <ProjectRow>
        <ProjectColumn>
          {data.projectBigTextTitle && data.projectBigText && (
            <>
              <ProjectTextTitle>{data.projectBigTextTitle}</ProjectTextTitle>
              <ProjectBigText>
                {data.projectBigText
                  .replace(/\\n/g, ' ')
                  .split('\n')
                  .map((t, i) =>
                    i > 0 ? (
                      <span key={i}>
                        <br />
                        {t}
                      </span>
                    ) : (
                      t
                    )
                  )}
              </ProjectBigText>{' '}
            </>
          )}
        </ProjectColumn>
      </ProjectRow>
      <ProjectRow>
        {data.projectImage3 && (
          <ProjectVerticalImage
            style={{
              backgroundImage: `url('https:${data.projectImage3.fields.file.url}')`,
            }}
          />
        )}
        <ProjectColumn>
          {data.projectTextTitle3 && data.projectText3 && (
            <>
              <ProjectTextTitle>{data.projectTextTitle3}</ProjectTextTitle>
              <ProjectText>
                {data.projectText3
                  .replace(/\\n/g, ' ')
                  .split('\n')
                  .map((t, i) =>
                    i > 0 ? (
                      <span key={i}>
                        <br />
                        {t}
                      </span>
                    ) : (
                      t
                    )
                  )}
              </ProjectText>{' '}
            </>
          )}
        </ProjectColumn>
      </ProjectRow>
      <ProjectRow>
        <ProjectColumn>
          {data.projectTextTitle4 && data.projectText4 && (
            <>
              <ProjectTextTitle>{data.projectTextTitle4}</ProjectTextTitle>
              <ProjectText>
                {data.projectText4
                  .replace(/\\n/g, ' ')
                  .split('\n')
                  .map((t, i) =>
                    i > 0 ? (
                      <span key={i}>
                        <br />
                        {t}
                      </span>
                    ) : (
                      t
                    )
                  )}
              </ProjectText>{' '}
            </>
          )}
        </ProjectColumn>
        {data.projectImage4 && (
          <ProjectVerticalImage
            style={{
              backgroundImage: `url('https:${data.projectImage4.fields.file.url}')`,
            }}
          />
        )}
      </ProjectRow>
      <ProjectRow>
        {data.projectImage5 && (
          <ProjectVerticalImage
            style={{
              backgroundImage: `url('https:${data.projectImage5.fields.file.url}')`,
            }}
          />
        )}
        <ProjectColumn>
          {data.projectTextTitle5 && data.projectText5 && (
            <>
              <ProjectTextTitle>{data.projectTextTitle5}</ProjectTextTitle>
              <ProjectText>
                {data.projectText5
                  .replace(/\\n/g, ' ')
                  .split('\n')
                  .map((t, i) =>
                    i > 0 ? (
                      <span key={i}>
                        <br />
                        {t}
                      </span>
                    ) : (
                      t
                    )
                  )}
              </ProjectText>
            </>
          )}
        </ProjectColumn>
      </ProjectRow>
      <ProjectRow>
        <ProjectColumn>
          {data.projectTextTitle6 && data.projectText6 && (
            <>
              <ProjectTextTitle>{data.projectTextTitle6}</ProjectTextTitle>
              <ProjectText>
                {data.projectText6
                  .replace(/\\n/g, ' ')
                  .split('\n')
                  .map((t, i) =>
                    i > 0 ? (
                      <span key={i}>
                        <br />
                        {t}
                      </span>
                    ) : (
                      t
                    )
                  )}
              </ProjectText>{' '}
            </>
          )}
        </ProjectColumn>
        {data.projectImage6 && (
          <ProjectVerticalImage
            style={{
              backgroundImage: `url('https:${data.projectImage6.fields.file.url}')`,
            }}
          />
        )}
      </ProjectRow>
    </ProjectContainer>
  );
};
