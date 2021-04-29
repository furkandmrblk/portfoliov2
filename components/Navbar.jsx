import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  CircularText,
  NavbarArrow,
  NavbarContainer,
  NavbarHamburger,
  NavbarHamburgerDiv,
  NavbarItem,
  NavbarItemDiv,
  NavbarLeft,
  NavbarLegals,
  NavbarLegalsDiv,
  NavbarLogo,
  NavbarMegaMenu,
  NavbarRight,
  NavDiv,
} from './Navbar.styled';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setTimeout(() => {
      if (open === true) {
        document.body.style.overflow = 'hidden';
      }
    }, 600);
    if (open === false) {
      document.body.style.overflow = '';
    }
  });

  useEffect(() => {
    const angletoradian = (angle) => {
      return angle * (Math.PI / 180);
    };

    const radius = 100;
    const diameter = radius * 2;

    const circle = document.getElementById('circular-text');
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;

    const text = circle.innerText;
    const character = text.split('');
    circle.innerText = null;

    let angle = -90;

    const deltaangle = 360 / character.length;

    character.forEach((char, index) => {
      const charelement = document.createElement('span');
      charelement.innerText = char;
      const xpos = radius * Math.cos(angletoradian(angle));
      const ypos = radius * Math.sin(angletoradian(angle));

      const transform = `translate(${xpos}px, ${ypos}px)`;
      const rotate = `rotate(${index * deltaangle}deg)`;
      charelement.style.transform = `${transform} ${rotate}`;

      angle += deltaangle;
      circle.appendChild(charelement);
    });
  }, []);

  return (
    <NavbarContainer>
      <NavDiv>
        <Link href="/">
          <NavbarLogo open={open}>furkandmrblk</NavbarLogo>
        </Link>
        <NavbarHamburgerDiv onClick={openMenu}>
          <NavbarHamburger open={open} />
          <NavbarHamburger open={open} />
        </NavbarHamburgerDiv>
      </NavDiv>
      <NavbarMegaMenu open={open}>
        <NavbarLeft>
          <Link href="/">
            <NavbarItemDiv onClick={openMenu}>
              <NavbarItem>Homepage</NavbarItem>
              <NavbarArrow />
            </NavbarItemDiv>
          </Link>
          <Link href="/#about">
            <NavbarItemDiv onClick={openMenu}>
              <NavbarItem>About</NavbarItem>
              <NavbarArrow />
            </NavbarItemDiv>
          </Link>
          <Link href="/#work">
            <NavbarItemDiv onClick={openMenu}>
              <NavbarItem>Work</NavbarItem>
              <NavbarArrow />
            </NavbarItemDiv>
          </Link>
          <Link href="/#contact">
            <NavbarItemDiv onClick={openMenu}>
              <NavbarItem>Contact</NavbarItem>
              <NavbarArrow />
            </NavbarItemDiv>
          </Link>
          <NavbarLegalsDiv>
            <Link href="/imprint">
              <NavbarLegals>Imprint</NavbarLegals>
            </Link>
            <Link href="/privacypolicy">
              <NavbarLegals>Privacy Policy</NavbarLegals>
            </Link>
          </NavbarLegalsDiv>
        </NavbarLeft>
        <NavbarRight>
          <CircularText id="circular-text">
            LET'S MAKE A DIFFERENCE&nbsp;
          </CircularText>
        </NavbarRight>
      </NavbarMegaMenu>
    </NavbarContainer>
  );
};
