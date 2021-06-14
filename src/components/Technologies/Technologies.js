import React from 'react';
import { DiReact, DiZend, DiHtml5, DiCss3, DiPostgresql, DiNodejs, DiFirebase } from 'react-icons/di';
import { SiJavascript, SiTypescript, SiGithub, SiHeroku } from 'react-icons/si';
import { FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle >
      Technologies
    </SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world from front-end to back-end.
    </SectionText>
    <List>
    
    <ListItem>
      <FaLaptopCode size='3rem' /><br />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience With:<br/>
          <SiJavascript  size='3rem' />  JavaScript <br/>
          <DiHtml5  size='3rem' />  HTML <br/>
          <DiCss3  size='3rem' />  CSS <br/>
          <DiReact  size='3rem' />  React <br/>
          <SiTypescript  size='3rem' />  TypeScript
        </ListParagraph>
      </ListContainer>
    </ListItem>
    
    <ListItem>
      <FaServer size='3rem' /><br />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience With:<br/>
          <DiNodejs size='4rem' />  Node.js <br/>
          <DiPostgresql size='3rem' />  PostgresSQL
          
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <FaTools size='3rem' /><br />
      <ListContainer>
        <ListTitle>Tools</ListTitle>
        <ListParagraph>
          Experience With:<br/>
          <SiGithub size='3rem' />  Git <br/>
          <DiFirebase size='3rem' />  Firebase <br/>
          <SiHeroku size='3rem' />  Heroku <br/>
          
        </ListParagraph>
      </ListContainer>
    </ListItem>
    
    </List>
    
  </Section>
);

export default Technologies;
