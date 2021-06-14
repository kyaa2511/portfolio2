import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const myProjects = [{
//          title: 'Project 1',
//          description: 'Description about this project'
//       },{
//         title: 'Project 2',
//         description: 'Description about this project'
//       },{
//         title: 'Project 3',
//         description: 'Description about this project'
//       },{
//         title: 'Project 4',
//          description: 'Description about this project'
// }]


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main >Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent style={{fontWeight: "bold", marginTop: "20px", fontSize: '18px', textDecoration: "underline"}}>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i} >{tag}</Tag>
                ))}
              </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>See My Code</ExternalLinks>
            <ExternalLinks href={source}>View My Project</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;