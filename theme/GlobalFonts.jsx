import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from './MediaQueries';
// Font Families

export const manrope = `'Manrope', sans-serif`;

// Base Font Settings

export const baseFontSize = '16px !default';
export const baseLineHeight = '1.5 !default';

// Font Weights

export const $thin = 200;
export const $light = 300;
export const $regular = 400;
export const $medium = 500;
export const $semiBold = 600;

// Font Sizes

export const $lg = '4rem';
export const $md = '2rem';
export const $sm = '1.125rem';
export const $xs = '0.75rem';

// 1440px-1650px
export const $lg2 = '3.5rem';
export const $md2 = '1.9rem';
export const $sm2 = '1.025rem';
export const $xs2 = '0.7rem';

// MQ 1170px-1440px
export const $lg3 = '';
export const $md3 = '';
export const $sm3 = '';
export const $xs3 = '';

// MQ 1024px-1170px
export const $lg4 = '2.9rem';
export const $md4 = '1.6rem';
export const $sm4 = '0.925rem';
export const $xs4 = '0.65rem';

// MQ 768px-1024px
export const $lg5 = '';
export const $md5 = '';
export const $sm5 = '';
export const $xs5 = '';

// MQ 550px-768px
export const $lg6 = '2.3rem';
export const $md6 = '1.4rem';
export const $sm6 = '0.925rem';
export const $xs6 = '0.65rem';

// MQ 425px-550px
export const $lg7 = '2rem';
export const $md7 = '1.1rem';
export const $sm7 = '0.9rem';
export const $xs7 = '0.65rem';

// MQ 375px-425px
export const $lg8 = '1.7rem';
export const $md8 = '1.1rem';
export const $sm8 = '0.9rem';
export const $xs8 = '0.65rem';

// MQ 320px-375px
export const $lg9 = '1.5rem';
export const $md9 = '1rem';
export const $sm9 = '0.85rem';
export const $xs9 = '0.65rem';

// MQ 280px-375px

export const large = styled(motion.h2)`
  font-size: ${$lg};

  @media (max-width: ${media.desktopM}) {
    font-size: ${$lg2};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${$lg4};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${$lg6};
  }
  @media (max-width: ${media.between}) {
    font-size: ${$lg7};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${$lg8};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${$lg9};
  }
`;

export const medium = styled(motion.h3)`
  font-size: ${$md};

  @media (max-width: ${media.desktopM}) {
    font-size: ${$md2};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${$md4};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${$md6};
  }
  @media (max-width: ${media.between}) {
    font-size: ${$md7};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${$md8};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${$md9};
  }
`;

export const small = styled(motion.h3)`
  font-size: ${$sm};

  @media (max-width: ${media.desktopM}) {
    font-size: ${$sm2};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${$sm4};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${$sm6};
  }
  @media (max-width: ${media.between}) {
    font-size: ${$sm7};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${$sm8};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${$sm9};
  }
`;

export const extrasmall = styled(motion.h3)`
  font-size: ${$xs};

  @media (max-width: ${media.desktopM}) {
    font-size: ${$xs2};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${$xs4};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${$xs6};
  }
  @media (max-width: ${media.between}) {
    font-size: ${$xs7};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${$xs8};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${$xs9};
  }
`;

// Hrefs

export const mediumA = styled(motion.a)`
  font-size: ${$md};

  @media (max-width: ${media.desktopM}) {
    font-size: ${$md2};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${$md4};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${$md6};
  }
  @media (max-width: ${media.between}) {
    font-size: ${$md7};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${$md8};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${$md9};
  }
`;

export const smallA = styled(motion.a)`
  font-size: ${$sm};

  @media (max-width: ${media.desktopM}) {
    font-size: ${$sm2};
  }
  @media (max-width: ${media.laptopM}) {
    font-size: ${$sm4};
  }
  @media (max-width: ${media.tablet}) {
    font-size: ${$sm6};
  }
  @media (max-width: ${media.between}) {
    font-size: ${$sm7};
  }
  @media (max-width: ${media.mobileL}) {
    font-size: ${$sm8};
  }
  @media (max-width: ${media.mobileM}) {
    font-size: ${$sm9};
  }
`;
