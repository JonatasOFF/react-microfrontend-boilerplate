export const colors = {
  normal: {
    black: '#1c1c1c',
    defaultBlack: '#000000',
    white: '#ffffff',
  },
  soft: {
    orange1: 'orange',

    green1: 'green',

    red1: 'red',

    blue1: 'blue',
  },
  neutral: {
    gray1: 'grey',

    black1: 'black',
  },
} as const;

export const font = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 600,
  extrabold: 700,
  black: 900,
  sizes: {
    base: '1rem',
    small: '1.2rem',
    normal: ' 1.4rem',
    large: '1.6rem',
    heading06: '1.8rem',
    heading05: '2rem',
    heading04: '2.4rem',
    heading03: '2.8rem',
    heading02: '3rem',
    heading01: '4rem',
  },
  lineHeight: {
    xxSmall: '1.6rem',
    xSmall: '1.8rem',
    small: '2.1rem',
    normal: '2.4rem',
    large: '2.7rem',
    heading06: '2.8rem',
    heading05: '2.9rem',
    heading04: '3.4rem',
    heading03: '3.8rem',
    heading02: '4.3rem',
    heading01: '5rem',
  },
  family: {},
  presets: {
    primaryTitles: '300 4.0rem',
  },
} as const;

export const ZIndex = {
  base: 10,
  dropdown: 15,
  menu: 20,
  overlay: 30,
  modal: 40,
} as const;

export const breakpoints = {
  small: '576px',
  normal: '650px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
  xxlarge: '1400px',
  xxxlarge: '1700px',
} as const;
