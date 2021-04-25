import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  NavbarArrow,
  NavbarContainer,
  NavbarHamburger,
  NavbarHamburgerDiv,
  NavbarItem,
  NavbarItemDiv,
  NavbarLeft,
  NavbarLegals,
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
          <Link href="/imprint">
            <NavbarLegals>Imprint</NavbarLegals>
          </Link>
          <Link href="/privacypolicy">
            <NavbarLegals>Privacy Policy</NavbarLegals>
          </Link>
        </NavbarLeft>
        <NavbarRight></NavbarRight>
      </NavbarMegaMenu>
    </NavbarContainer>
  );
};
