import React, { useEffect, useRef } from 'react';
import { AboutContainer, AboutText } from './About.styled';
import { Power3, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  let Text = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      gsap.from(Text, 1.5, {
        opacity: 0,
        y: 50,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: Text,
        },
      });
    }, 500);
  }, []);

  return (
    <AboutContainer id="about">
      <AboutText ref={(el) => (Text = el)}>
        I am a web developer, brand strategist & UI/UX designer, based in
        Berlin.
      </AboutText>
    </AboutContainer>
  );
};
