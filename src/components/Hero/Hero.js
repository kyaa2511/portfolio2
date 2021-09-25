import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding >
   <LeftSection>
     <SectionTitle main center >
        Welcome To <br />
        My Personal Portfolio
     </SectionTitle>
     <SectionText>
     Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements. 
     </SectionText>
     <Button onClick={() => window.location = "https://www.linkedin.com/in/katana-yaa-143949129/"} >Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;