import styled from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';

// Navbar Container
export const NavbarContainer = styled.div`
  z-index: 9999;
  position: fixed;

  width: 100%;

  /* backdrop-filter: blur(5px); */

  padding: 3.125rem 9.6875rem;
`;
export const NavDiv = styled.div`
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Navbar Logo
export const NavbarLogo = styled.h2`
  z-index: 9999;
  font-size: ${typeface.$sm};

  color: ${({ open }) => (open ? `${color.$white}` : `${color.$black}`)};

  cursor: pointer;

  transition: color 800ms ease-in-out;
`;

// Navbar MegaMenu
export const NavbarMegaMenu = styled.div`
  z-index: 9998;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100vh;
  width: ${({ open }) => (open ? '100%' : '0')};

  background-color: ${color.$crimson};
  color: ${color.$white};

  display: flex;
  align-items: center;

  transition: all 800ms ease-in-out;

  padding: ${({ open }) => (open ? '3.125rem 9.6875rem' : '0')};
`;

export const NavbarLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  color: ${color.$white};

  width: 60%;

  overflow: hidden;
  white-space: nowrap;
`;

export const NavbarRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${color.$white};

  width: 40%;
`;

export const NavbarItem = styled.h1`
  font-size: ${typeface.$lg};
`;

export const NavbarArrow = styled.div`
  height: 30px;
  width: 43px;

  background-image: url('/NavbarArrow.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const NavbarItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 30rem;

  cursor: pointer;

  margin-bottom: 0.975rem;
`;

export const NavbarLegals = styled.h2`
  font-size: ${typeface.$sm};

  &:not(:last-child) {
    margin-bottom: 0.975rem;
    margin-top: 3rem;
  }

  cursor: pointer;
`;

// Navbar Hamburger
export const NavbarHamburger = styled.div`
  z-index: 9999;
  height: 2px;
  width: 2.7375rem;

  &:first-child {
    margin-bottom: 0.75rem;
  }

  background-color: ${({ open }) =>
    open ? `${color.$white}` : `${color.$black}`};
  border: ${({ open }) =>
    open ? `2px  ${color.$white}` : `2px  ${color.$black}`};

  transition: all 800ms ease-in-out;
`;

export const NavbarHamburgerDiv = styled.div`
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;

// Navbar Right Elements
