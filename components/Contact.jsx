import React from 'react';
import {
  ContactButton,
  ContactColumn,
  ContactContainer,
  ContactImage,
  ContactTitle,
} from './Contact.styled';

export const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactColumn>
        <ContactTitle>Ready to talk? Let's collaborate.</ContactTitle>
        <ContactButton href="mailto:ibrahimdmrblk@outlook.de">
          Contact Me
        </ContactButton>
      </ContactColumn>
      <ContactImage />
    </ContactContainer>
  );
};
