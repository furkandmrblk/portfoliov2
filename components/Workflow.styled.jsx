import styled from 'styled-components';
import * as typeface from '../theme/GlobalFonts';
import * as color from '../theme/GlobalColors';
import { media } from '../theme/MediaQueries';

// Workflow Container
export const WorkflowContainer = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: center;

  padding: 23.4375rem 9.6875rem;
`;

// Workflow Background Block
export const WorkflowBackgroundBlock = styled.div`
  z-index: -1;
  position: absolute;
  right: 0;

  height: 775px;
  width: 785px;

  background-color: ${color.$black};
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
`;

// Workflow Title
export const WorkflowTitle = styled.h2`
  font-size: ${typeface.$lg};

  margin-bottom: 2rem;
`;

// Workflow ItemContainer, ItemDiv, ItemArrow, Item, Description
export const WorkflowItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WorkflowItemDiv = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 25rem;

  cursor: pointer;

  color: ${color.$white};

  margin-bottom: 1.75rem;
`;

export const WorkflowItem = styled.h3`
  font-size: ${typeface.$md};
`;
export const WorkflowItemArrow = styled.div`
  height: 1rem;
  width: 23px;

  background-image: url('/WorkflowItemArrow.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: all 350ms ease-in-out;
`;

export const WorkflowDescription = styled.h3`
  font-size: ${typeface.$sm};
  max-width: 20rem;
  text-align: justify;

  height: ${({ open }) => (open ? '8.5rem' : '0')};

  overflow: hidden;

  transition: all 400ms ease-in-out;
`;

export const WorkflowDescription2 = styled.h3`
  font-size: ${typeface.$sm};
  max-width: 20rem;
  text-align: justify;

  height: ${({ open2 }) => (open2 ? '8.5rem' : '0')};

  overflow: hidden;

  transition: all 400ms ease-in-out;
`;

export const WorkflowDescription3 = styled.h3`
  font-size: ${typeface.$sm};
  max-width: 20rem;
  text-align: justify;

  height: ${({ open3 }) => (open3 ? '8.5rem' : '0')};

  overflow: hidden;

  transition: all 400ms ease-in-out;
`;

export const WorkflowDescription4 = styled.h3`
  font-size: ${typeface.$sm};
  max-width: 20rem;
  text-align: justify;

  height: ${({ open4 }) => (open4 ? '8.5rem' : '0')};

  overflow: hidden;

  transition: all 400ms ease-in-out;
`;

export const WorkflowDescription5 = styled.h3`
  font-size: ${typeface.$sm};
  max-width: 20rem;
  text-align: justify;

  height: ${({ open5 }) => (open5 ? '8.5rem' : '0')};

  overflow: hidden;

  transition: all 400ms ease-in-out;
`;

export const WorkflowDescription6 = styled.h3`
  font-size: ${typeface.$sm};
  max-width: 20rem;
  text-align: justify;

  height: ${({ open6 }) => (open6 ? '8.5rem' : '0')};

  overflow: hidden;

  transition: all 400ms ease-in-out;
`;
