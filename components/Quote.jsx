import React, { useEffect, useRef } from 'react';
import {
  QuoteContainer,
  QuoteBackgroundBlock,
  QuoteText,
  QuoteDiv,
} from './Quote.styled';
import { Power3, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Quote = (props) => {
  const data = props.props.fields;

  let Text = useRef(null);

  useEffect(() => {
    gsap.from(Text, 1.5, {
      opacity: 0,
      y: 50,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: Text,
      },
    });
  });

  return (
    <QuoteContainer>
      <QuoteBackgroundBlock />
      <QuoteDiv>
        <QuoteText ref={(el) => (Text = el)}>{data.quoteText}</QuoteText>
      </QuoteDiv>
    </QuoteContainer>
  );
};
