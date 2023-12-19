const palette = {
  background: '#FFFFFF',
  backgroundLight: '#F8FAFC',
  backgroundDark: '#E4EBF1',

  primaryColor: '#1F93FF',
  primaryColorDark: '#1976CC',
  primaryColorDarker: '#135899',
  primaryColorLight: '#EBF5FF',

  secondaryColor: '#5d7592',
  successColor: '#44CE4B',
  violetColor: '#AC52FF',

  dangerColor: '#ff382d',
  dangerColorLight: '#FFCCD1',

  warningColor: '#ffc532',
  warningColorLight: '#FFEDBF',

  colorWhite: '#FFFFFF',
  colorBlack: '#000000',

  textLighter: '#779bbb',
  textLight: '#446888',
  text: '#37546D',
  textDark: '#293F51',
  textDarker: '#1f2d3d',

  borderDark: '#37546D',
  border: '#C9D7E3',
  borderLight: '#EBF0F5',

  iconDark: '#293F51',
  icon: '#37546D',
  iconLight: '#446888',
}

const spacing = {
  zero: 0,
  tiny: 2,
  micro: 4,
  smaller: 8,
  half: 12,
  small: 16,
  medium: 24,
  large: 32,
  larger: 48,
}

const fontSize = {
  xxs: 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 30,
}

const borderRadius = {
  zero: 0,
  micro: 4,
  small: 8,
  medium: 12,
  large: 16,
  larger: 24,
  largest: 32,
  full: 48,
}

const fontWeight = {
  thin: '100',
  ultraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  heavy: '800',
  bold: 'bold',
  normal: 'normal',
}

const lightColors = {
  ...palette,
  background: '#fff',
  text: '#333',
}

const darkColors = {
  ...palette,
  background: '#333',
  text: '#fff',
}

const theme = {
  light: {
    colors: lightColors,
    spacing,
    fontSize,
    borderRadius,
    fontWeight,
  },
  dark: {
    colors: darkColors,
    spacing,
    fontSize,
    borderRadius,
    fontWeight,
  },
}

export default theme
