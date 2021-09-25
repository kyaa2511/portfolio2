import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call Me</LinkTitle>
          <LinkItem href = 'mobile:317-661-1082'>317-640-5837</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href = 'mailto:kyaa@katanayaa.com'>kyaa@katanayaa.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> Innovating one project at a time </Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
      
      <SocialContainer>
        <SocialIconsContainer>
      
          <SocialIcons href="https://github.com/kyaa2511" target_blank >
            <AiFillGithub size="3rem"/>
          </SocialIcons>
        
        <SocialIcons href="https://www.linkedin.com/in/katana-yaa-143949129/" >
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        
        <SocialIcons href="https://www.facebook.com/katana.yaa.587/" >
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
        
        <SocialIcons href="https://www.instagram.com/_chocolate_.thunda/" >
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      
      </SocialIconsContainer>
    </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
