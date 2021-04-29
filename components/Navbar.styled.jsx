import styled, { keyframes } from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import {
  extrasmall,
  small,
  smallA,
  medium,
  mediumA,
  large,
} from '../theme/GlobalFonts';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';

// Navbar Container
export const NavbarContainer = styled.div`
  z-index: 9999;
  position: fixed;

  width: 100%;

  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1);

  padding: 3.125rem 9.6875rem;

  @media (max-width: ${media.laptopL}) {
    padding: 2.125rem 6.6875rem;
  }
  @media (max-width: ${media.laptopS}) {
    padding: 2.125rem 4.6875rem;
  }
  @media (max-width: ${media.tablet}) {
    padding: 2.125rem 3.6875rem;
  }
  @media (max-width: ${media.between}) {
    padding: 1.725rem 2.6875rem;
  }
  @media (max-width: ${media.mobileM}) {
    padding: 1.525rem 1.6875rem;
  }
`;
export const NavDiv = styled.div`
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Navbar Logo
export const NavbarLogo = styled(small)`
  z-index: 9999;

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

  @media (max-width: ${media.laptopL}) {
    padding: ${({ open }) => (open ? '3.125rem 6.6875rem' : '0')};
  }
  @media (max-width: ${media.laptopS}) {
    padding: ${({ open }) => (open ? '3.125rem 4.6875rem' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    padding: ${({ open }) => (open ? '8.125rem 3.6875rem' : '0')};

    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: ${media.between}) {
    padding: ${({ open }) =>
      open ? '6.125rem 2.6875rem 2.125rem 2.6875rem' : '0'};
  }
  @media (max-width: ${media.mobileM}) {
    padding: ${({ open }) =>
      open ? '6.125rem 1.6875rem 2.125rem 1.6875rem' : '0'};
  }
`;

export const NavbarLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  color: ${color.$white};

  height: 100vh;
  width: 60%;

  overflow: hidden;
  white-space: nowrap;

  @media (max-width: ${media.laptopL}) {
    width: 50%;
  }
  @media (max-width: ${media.laptopS}) {
    width: 60%;
  }
  @media (max-width: ${media.tablet}) {
    height: 50vh;
    width: 100%;
  }
`;

export const NavbarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: ${color.$white};

  height: 100vh;
  width: 40%;

  overflow: hidden;
  white-space: nowrap;

  @media (max-width: ${media.laptopL}) {
    width: 50%;
  }
  @media (max-width: ${media.laptopS}) {
    width: 40%;
  }
  @media (max-width: ${media.tablet}) {
    height: 50vh;
    width: 100%;

    justify-content: flex-start;
  }
`;

export const NavbarItem = styled(large)``;

export const NavbarArrow = styled.div`
  height: 30px;
  width: 43px;

  background-image: url('/NavbarArrow.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${media.between}) {
    height: 20px;
    width: 33px;
  }
`;

export const NavbarItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 30rem;

  cursor: pointer;

  margin-bottom: 0.975rem;

  @media (max-width: ${media.laptopL}) {
    width: 27rem;
  }
  @media (max-width: ${media.laptopM}) {
    width: 23rem;
  }
  @media (max-width: ${media.laptopS}) {
    width: 20rem;
  }
  @media (max-width: ${media.mobileL}) {
    width: 15rem;
  }
`;

export const NavbarLegals = styled(small)`
  &:not(:last-child) {
    margin-bottom: 0.975rem;
  }

  cursor: pointer;
`;

export const NavbarLegalsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  height: 20vh;
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

  @media (max-width: ${media.laptopM}) {
    height: 2px;
    width: 2.4375rem;

    &:first-child {
      margin-bottom: 0.65rem;
    }
  }
`;

export const NavbarHamburgerDiv = styled.div`
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;

// Navbar Right Elements

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const CircularText = styled(medium)`
  position: relative;

  border-radius: 100%;

  white-space: nowrap;

  animation: ${spin} 20s linear infinite;

  margin-bottom: 5rem;
  margin-right: 9rem;

  span {
    position: absolute;

    top: -50px;
    right: 90px;
    bottom: -50px;
  }

  @media (max-width: 1520px) {
    span {
      position: absolute;

      top: -30px;
      bottom: -30px;
    }
  }
  @media (max-width: ${media.laptopL}) {
    margin-bottom: 8rem;
    margin-right: 7rem;
    span {
      position: absolute;

      top: -15px;

      bottom: -15px;
    }
  }
  @media (max-width: ${media.laptopM}) {
    margin-bottom: 10rem;
    margin-right: 5rem;
    span {
      position: absolute;

      top: 20px;
      bottom: 20px;
    }
  }
  @media (max-width: ${media.laptopS}) {
    margin-bottom: 13rem;
    margin-right: 1.5rem;
    span {
      position: absolute;

      top: 80px;
      bottom: 80px;
    }
  }
  @media (max-width: ${media.tablet}) {
    margin: 5rem 0 0 1rem;
    span {
      position: absolute;

      top: 80px;
      bottom: 80px;
    }
  }
  @media (max-width: ${media.mobileL}) {
    margin: 5rem 0 0 1rem;
    span {
      position: absolute;

      top: 100px;
      bottom: 100px;
    }
  }
  @media (max-width: ${media.mobileM}) {
    display: none;
  }
`;
