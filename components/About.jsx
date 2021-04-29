import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AboutContainer, AboutText } from './About.styled';

export const About = (props) => {
  const data = props.props.fields;
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

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
    <AboutContainer id="about">
      <AboutText
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeIn}
      >
        {data.aboutText}
      </AboutText>
    </AboutContainer>
  );
};
