export default {
  font: {
    primary: 'freight-neo-pro, sans-serif',
    secondary: 'district-pro, sans-serif'
  },
  transition: {
    default: 'all 0.3s ease-in-out'
  },
  colors: {
    black: '#1C1C1E',
    graphite: '#22211F',
    white: '#FFFFFF',
    gray: '#767676',
    lightGray: '#DBDFE4',
    offwhite: '#F3F3F6',
    cornhusk: '#C94D3A',
    error: '#F37068',
    warning: '#FDB765',
    success: '#60DE92',
    save: '#6AD193',
    focus: '#43a0f4',
    disabled: '#D1D5D9',
    line: '#D1D5D9',
    discount: '#BAFDD5',
    borderOffWhite: '#FFFAED',
    backgrounGrey: '#FBFBFB',
    backgroundWhite: '#F5F5F5',
    scrollBarColor: '#f1f1f1',
    scrollBarColorThumb: '#888'
  },
  shadow: '0px 2px 20px rgba(28, 28, 30, 0.3)',
  smallShadow: '0px 2px 20px rgba(28, 28, 30, 0.1)',
  overlay: 'rgba(28, 28, 30, 0.1)',
  hoverBackground: 'rgba(255, 255, 255, 0.8)',
  layers: {
    header: 29,
    overlay: 30,
    menuPoppup: 31,
    closePopupButton: 35,
    select: 10
  },
  recommendedProducts_BG: 'rgba(106, 209, 147, 0.2)',
  typography: {
    title1: {
      fontSize: '5.625rem',
      fontFamily: 'freight-neo-pro',
      lineHeight: '6.1875rem',
      as: 'h1',
      color: '#1C1C1E',
      '@media (max-width: 768px)': {
        fontSize: '3rem',
        lineHeight: '3.3rem'
      }
    },
    title2: {
      fontSize: '3.9375rem',
      fontFamily: 'freight-neo-pro',
      lineHeight: '4.3125rem',
      as: 'h2',
      color: '#1C1C1E',
      '@media (max-width: 768px)': {
        fontSize: '2.4375rem',
        lineHeight: '2.6875rem'
      }
    },
    title3: {
      fontSize: '2.8125rem',
      fontFamily: 'freight-neo-pro',
      lineHeight: '3.0625rem',
      as: 'h3',
      color: '#1C1C1E',
      '@media (max-width: 768px)': {
        fontSize: '1.9375rem',
        lineHeight: '2.125rem'
      }
    },
    title4: {
      fontSize: '1.9375rem',
      fontFamily: 'freight-neo-pro',
      lineHeight: '2.125rem',
      as: 'h4',
      color: '#1C1C1E',
      '@media (max-width: 768px)': {
        fontSize: '1.5625rem',
        lineHeight: '1.6875rem'
      }
    },
    title5: {
      fontSize: '1.4375rem',
      fontFamily: 'district-pro',
      lineHeight: '1.5625rem',
      as: 'h5',
      color: '#1C1C1E'
    },
    subtitle: {
      fontSize: '1.25rem',
      fontFamily: 'district-pro',
      lineHeight: '1.75rem',
      as: 'p',
      color: '#1C1C1E'
    },
    body: {
      fontSize: '1rem',
      fontFamily: 'district-pro',
      lineHeight: '1.375rem',
      as: 'p',
      color: '#1C1C1E'
    },
    caption: {
      fontSize: '0.875rem',
      fontFamily: 'district-pro',
      lineHeight: '1.375rem',
      as: 'p',
      color: '#1C1C1E'
    },
    label: {
      fontSize: '0.75rem',
      fontFamily: 'district-pro',
      lineHeight: '0.8125rem',
      as: 'label',
      color: '#1C1C1E'
    }
  },
  spacings: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1.25rem',
    lg: '1rem',
    xl: '2.5rem',
    xxl: '5rem'
  },
  sizes: {
    xxs: '5rem',
    xs: '27.5rem',
    sm: '34.75rem',
    md: '42rem',
    lg: '56.5625rem',
    xl: '71.125rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '2.5rem',
    circle: '50%'
  },
  button: {
    link: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '0.875rem',
      lineHeight: '0.875rem',
      padding: '8px 0px',
      userSelect: 'none',
      color: '#22211F',
      '&:hover': {
        cursor: 'pointer'
      },
      '&:focus': {
        padding: '8px',
        border: '2px solid #43a0f4'
      },
      '&:disabled': {
        cursor: 'not-allowed',
        color: '#D1D5D9'
      },
      position: 'relative',
      textDecoration: 'none',
      '&:after': {
        position: 'absolute',
        content: ' ',
        height: '2px',
        bottom: '-4px',
        margin: '0',
        left: '0',
        right: '0',
        width: '100%',
        background: '#22211F',
        transition: '.5s'
      },
      '&:hover:after': {
        width: ' 50%'
      }
    }
  }
} as const
