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

export const Contact = (props) => {
  const data = props.props.fields;

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
          {data.contactTitle}
        </ContactTitle>
        <ContactButton
          ref={(el) => (Button = el)}
          href={'mailto:' + data.email}
        >
          Contact Me
        </ContactButton>
      </ContactColumn>
      <ContactImage
        style={{
          backgroundImage: `url('https:${data.contactImage.fields.file.url}')`,
        }}
        ref={(el) => (Image = el)}
      />
    </ContactContainer>
  );
};
