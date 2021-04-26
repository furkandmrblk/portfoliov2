import React from 'react';
import Link from 'next/link';
import {
  FooterContainer,
  FooterDiv,
  FooterInfo,
  FooterItem,
  FooterItemDiv,
  FooterTitle,
} from './Footer.styled';

export const Footer = (props) => {
  const data = props.props.fields;

  return (
    <FooterContainer>
      <FooterDiv>
        <FooterItemDiv>
          <FooterTitle>Explore</FooterTitle>
          <Link href="/">
            <FooterItem>Homepage</FooterItem>
          </Link>
          <Link href="/#about">
            <FooterItem>About</FooterItem>
          </Link>
          <Link href="/#work">
            <FooterItem>Work</FooterItem>
          </Link>
        </FooterItemDiv>
        <FooterItemDiv>
          <FooterTitle>Socials</FooterTitle>

          <FooterItem>Instagram</FooterItem>

          <FooterItem href={data.linkedIn} target="_blank">
            LinkedIn
          </FooterItem>

          <FooterItem href={data.gitHub} target="_blank">
            GitHub
          </FooterItem>
        </FooterItemDiv>
        <FooterItemDiv>
          <FooterTitle>Legals</FooterTitle>
          <Link href="/privacypolicy">
            <FooterItem>Privacy Policy</FooterItem>
          </Link>
          <Link href="/imprint">
            <FooterItem>Imprint</FooterItem>
          </Link>
        </FooterItemDiv>
        <FooterItemDiv>
          <FooterTitle>Contact</FooterTitle>
          <FooterItem href={'mailto:' + data.email}>
            ibrahimdmrblk@outlook.de
          </FooterItem>
        </FooterItemDiv>
      </FooterDiv>
      <FooterInfo>furkandmrblk 2021 | Built with NextJS</FooterInfo>
    </FooterContainer>
  );
};
