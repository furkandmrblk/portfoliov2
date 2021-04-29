import styled from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import { large, medium, small } from '../theme/GlobalFonts';
import { motion } from 'framer-motion';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';

// Workflow Container
export const WorkflowContainer = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: center;

  padding: 11.28125rem 9.6875rem;

  @media (max-width: ${media.laptopL}) {
    padding: 11.28125rem 6.6875rem;
  }
  @media (max-width: ${media.laptopS}) {
    padding: 11.28125rem 4.6875rem;
  }
  @media (max-width: ${media.tablet}) {
    padding: 11.28125rem 3.6875rem;
  }
  @media (max-width: ${media.between}) {
    padding: 11.28125rem 2.6875rem;
  }
  @media (max-width: ${media.mobileM}) {
    padding: 11.28125rem 1.6875rem;
  }
`;

// Workflow Background Block
export const WorkflowBackgroundBlock = styled.div`
  z-index: -1;
  position: absolute;
  right: 0;

  height: 775px;
  width: 785px;

  background-color: ${color.$black};

  @media (max-width: ${media.laptopL}) {
    width: 735px;
  }
  @media (max-width: ${media.laptopM}) {
    height: 705px;
    width: 675px;
  }
  @media (max-width: ${media.laptopS}) {
    height: 685px;
    width: 615px;
  }
  @media (max-width: ${media.tablet}) {
    height: 645px;
    width: 485px;
  }
  @media (max-width: ${media.between}) {
    height: 575px;
    width: 345px;
  }
  @media (max-width: ${media.mobileL}) {
    width: 325px;
  }
  @media (max-width: ${media.mobileM}) {
    width: 255px;
  }
`;

// Workflow Div
export const WorkflowDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  min-height: 775px;

  color: ${color.$white};

  margin-right: 9rem;

  @media (max-width: ${media.laptopM}) {
    margin-right: 7rem;
  }
  @media (max-width: ${media.tablet}) {
    margin-right: 4rem;
  }
  @media (max-width: ${media.between}) {
    margin-right: 0rem;
  }
`;

// Workflow Title
export const WorkflowTitle = styled(large)`
  margin-bottom: 2rem;
`;

// Workflow ItemContainer, ItemDiv, ItemArrow, Item, Description
export const WorkflowItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WorkflowItemDiv = styled(motion.div)`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 25rem;

  cursor: pointer;

  color: ${color.$white};

  margin-bottom: 1.75rem;

  @media (max-width: ${media.laptopM}) {
    width: 20rem;
  }
  @media (max-width: ${media.tablet}) {
    width: 18rem;
  }
  @media (max-width: ${media.between}) {
    width: 14rem;
  }
  @media (max-width: ${media.mobileM}) {
    width: 12rem;
  }
`;

export const WorkflowItem = styled(medium)``;

export const WorkflowItemArrow = styled.div`
  height: 1rem;
  width: 23px;

  background-image: url('/WorkflowItemArrow.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: all 350ms ease-in-out;

  @media (max-width: ${media.mobileM}) {
    height: 0.9rem;
    width: 17px;
  }
`;

export const WorkflowDescription = styled(small)`
  max-width: 20rem;
  text-align: justify;

  height: ${({ open }) => (open ? '8.5rem' : '0')};

  overflow: hidden;

  transition: all 400ms ease-in-out;

  @media (max-width: ${media.desktopM}) {
    height: ${({ open }) => (open ? '7.5rem' : '0')};
  }
  @media (max-width: ${media.laptopM}) {
    height: ${({ open }) => (open ? '6.5rem' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    height: ${({ open }) => (open ? '8rem' : '0')};
    max-width: 18rem;
  }
  @media (max-width: ${media.between}) {
    max-width: 14rem;
  }
  @media (max-width: ${media.mobileM}) {
    max-width: 12rem;
  }
`;

export const WorkflowDescription2 = styled(small)`
  max-width: 20rem;
  text-align: justify;

  height: ${({ open2 }) => (open2 ? '8.5rem' : '0')};

  overflow: hidden;

  transition: all 400ms ease-in-out;

  @media (max-width: ${media.desktopM}) {
    height: ${({ open2 }) => (open2 ? '7.5rem' : '0')};
  }
  @media (max-width: ${media.laptopM}) {
    height: ${({ open2 }) => (open2 ? '6.5rem' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    height: ${({ open2 }) => (open2 ? '8rem' : '0')};
    max-width: 18rem;
  }
  @media (max-width: ${media.between}) {
    max-width: 14rem;
  }
  @media (max-width: ${media.mobileM}) {
    max-width: 12rem;
  }
`;

export const WorkflowDescription3 = styled(small)`
  max-width: 20rem;
  text-align: justify;

  height: ${({ open3 }) => (open3 ? '8.5rem' : '0')};

  overflow: hidden;

  transition: all 400ms ease-in-out;

  @media (max-width: ${media.desktopM}) {
    height: ${({ open3 }) => (open3 ? '7.5rem' : '0')};
  }
  @media (max-width: ${media.laptopM}) {
    height: ${({ open3 }) => (open3 ? '6.5rem' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    height: ${({ open3 }) => (open3 ? '8rem' : '0')};
    max-width: 18rem;
  }
  @media (max-width: ${media.between}) {
    max-width: 14rem;
  }
  @media (max-width: ${media.mobileM}) {
    max-width: 12rem;
  }
`;

export const WorkflowDescription4 = styled(small)`
  max-width: 20rem;
  text-align: justify;

  height: ${({ open4 }) => (open4 ? '8.5rem' : '0')};

  overflow: hidden;

  transition: all 400ms ease-in-out;

  @media (max-width: ${media.desktopM}) {
    height: ${({ open4 }) => (open4 ? '7.5rem' : '0')};
  }
  @media (max-width: ${media.laptopM}) {
    height: ${({ open4 }) => (open4 ? '6.5rem' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    height: ${({ open4 }) => (open4 ? '8rem' : '0')};
    max-width: 18rem;
  }
  @media (max-width: ${media.between}) {
    max-width: 14rem;
  }
  @media (max-width: ${media.mobileM}) {
    max-width: 12rem;
  }
`;

export const WorkflowDescription5 = styled(small)`
  max-width: 20rem;
  text-align: justify;

  height: ${({ open5 }) => (open5 ? '8.5rem' : '0')};

  overflow: hidden;

  transition: all 400ms ease-in-out;

  @media (max-width: ${media.desktopM}) {
    height: ${({ open5 }) => (open5 ? '7.5rem' : '0')};
  }
  @media (max-width: ${media.laptopM}) {
    height: ${({ open5 }) => (open5 ? '6.5rem' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    height: ${({ open5 }) => (open5 ? '8rem' : '0')};
    max-width: 18rem;
  }
  @media (max-width: ${media.between}) {
    max-width: 14rem;
  }
  @media (max-width: ${media.mobileM}) {
    max-width: 12rem;
  }
`;

export const WorkflowDescription6 = styled(small)`
  max-width: 20rem;
  text-align: justify;

  height: ${({ open6 }) => (open6 ? '8.5rem' : '0')};

  overflow: hidden;

  transition: all 400ms ease-in-out;

  @media (max-width: ${media.desktopM}) {
    height: ${({ open6 }) => (open6 ? '7.5rem' : '0')};
  }
  @media (max-width: ${media.laptopM}) {
    height: ${({ open6 }) => (open6 ? '6.5rem' : '0')};
  }
  @media (max-width: ${media.tablet}) {
    height: ${({ open6 }) => (open6 ? '8rem' : '0')};
    max-width: 18rem;
  }
  @media (max-width: ${media.between}) {
    max-width: 14rem;
  }
  @media (max-width: ${media.mobileM}) {
    max-width: 12rem;
  }
`;
