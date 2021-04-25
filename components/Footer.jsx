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

export const Footer = () => {
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
          <Link href="#">
            <FooterItem>Instagram</FooterItem>
          </Link>
          <Link href="#">
            <FooterItem>LinkedIn</FooterItem>
          </Link>
          <Link href="#">
            <FooterItem>GitHub</FooterItem>
          </Link>
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
          <FooterItem href="mailto:ibrahimdmrblk@outlook.de">
            ibrahimdmrblk@outlook.de
          </FooterItem>
        </FooterItemDiv>
      </FooterDiv>
      <FooterInfo>furkandmrblk 2021 | Built with NextJS</FooterInfo>
    </FooterContainer>
  );
};
