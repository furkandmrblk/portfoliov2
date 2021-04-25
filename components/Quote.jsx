import React from 'react';
import {
  QuoteContainer,
  QuoteBackgroundBlock,
  QuoteText,
  QuoteDiv,
} from './Quote.styled';

export const Quote = () => {
  return (
    <QuoteContainer>
      <QuoteBackgroundBlock />
      <QuoteDiv>
        <QuoteText>"If you do it right, it will last forever."</QuoteText>
      </QuoteDiv>
    </QuoteContainer>
  );
};
