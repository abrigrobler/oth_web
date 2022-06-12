const theme = {
  colors: {
    darkGrey: '#444444',
    darkerGrey: '#383838',
    lightGrey: '#9c9c9c',
    orange: '#ff9a00',
    cream: '#F6F7D7',
    specialTextOverlay: '#f5f5f5',
    pink: '#FF165D',
    selectionOrange: '#FFEEDB',
    mainBackground: '#f5f5f5',
    borderGrey: '#d3d3d3',
    backgroundGrey: '#e2e2e2',
  },
  gradients: {
    orangeLinear:
      'linear-gradient(45deg, rgba(255,109,0,1) 0%, rgba(255,154,0,1) 100%)',
  },
  boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
  borderRadius: {
    small: '5px',
    medium: '10px',
    large: '20px',
  },
  mediaQueries: {
    desktopOnly: 'only screen and (min-device-width : 1025px)',
    tabletOnly:
      'only screen and (min-device-width : 768px) and (max-device-width : 1024px)',
    mobileOnly: 'only screen and (max-width: 767px)',
    tabletDown: 'only screen and (max-device-width : 1024px)',
    tabletUp: 'only screen and (min-device-width : 768px)',
  },
};

export default theme;
