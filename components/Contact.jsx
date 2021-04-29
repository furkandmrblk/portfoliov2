import React, { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ContactButton,
  ContactColumn,
  ContactContainer,
  ContactImage,
  ContactTitle,
} from './Contact.styled';

export const Contact = (props) => {
  const data = props.props.fields;
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });
  const { ref2, inView2 } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView2) {
      controls.start('visible');
    }
    if (!inView2) {
      controls.start('hidden');
    }
  }, [controls, inView2]);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <ContactContainer id="contact">
      <ContactColumn>
        <ContactTitle
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
        >
          {data.contactTitle}
        </ContactTitle>
        <ContactButton
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          href={'mailto:' + data.email}
        >
          Contact Me
        </ContactButton>
      </ContactColumn>
      <ContactImage
        ref2={ref2}
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        style={{
          backgroundImage: `url('https:${data.contactImage.fields.file.url}')`,
        }}
      />
    </ContactContainer>
  );
};
