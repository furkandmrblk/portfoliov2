import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  QuoteContainer,
  QuoteBackgroundBlock,
  QuoteText,
  QuoteDiv,
} from './Quote.styled';

export const Quote = (props) => {
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
    <QuoteContainer>
      <QuoteBackgroundBlock />
      <QuoteDiv>
        <QuoteText
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
        >
          {data.quoteText}
        </QuoteText>
      </QuoteDiv>
    </QuoteContainer>
  );
};
