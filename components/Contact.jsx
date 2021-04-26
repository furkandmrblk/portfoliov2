import React, { useEffect, useRef } from 'react';
import {
  ContactButton,
  ContactColumn,
  ContactContainer,
  ContactImage,
  ContactTitle,
} from './Contact.styled';
import { Power3, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  let Title = useRef(null);
  let Button = useRef(null);
  let Image = useRef(null);

  useEffect(() => {
    gsap.from(Title, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Title,
      },
    });
    gsap.from(Button, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Button,
      },
    });
    gsap.from(Image, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Image,
      },
    });
  });

  return (
    <ContactContainer id="contact">
      <ContactColumn>
        <ContactTitle ref={(el) => (Title = el)}>
          Ready to talk? Let's collaborate.
        </ContactTitle>
        <ContactButton
          ref={(el) => (Button = el)}
          href="mailto:ibrahimdmrblk@outlook.de"
        >
          Contact Me
        </ContactButton>
      </ContactColumn>
      <ContactImage ref={(el) => (Image = el)} />
    </ContactContainer>
  );
};
