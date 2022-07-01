import {Dimensions, Platform} from 'react-native';

export const dimensions = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

export const colors = {
  greenLightLight: '#E3F5F3',
  blackLight: '#1E1E1E',
  greenMedium: '#0C9B89',
  greenMediumIntermediate: '#0b9b87',
  greenLight: '#84DCCF',
  greenHighLight: '#86CCC1',
  greenLeaf: '#A8E265',
  greenLeafLight: '#61E294',
  greenMediumDark: '#078070',
  greenPaleTeal: '#7ac3b9',
  greenIce: '#e4f5f3',

  yellowGolden: '#FFD700',
  yellowBrown: '#80C3B9',
  yellowMustard: '#ed9a35',
  yellowSand: '#fcfcb4',

  purple: '#50599D',
  blueLight: '#3080e1',
  red: '#FF0000',
  redDark: '#990F14',
  white: '#FFFFFF',
  greyVibrancy: '#ECECEC',
  greyLight: '#F5F5F5',
  grey: '#AAAAAA',
  greyMedium: '#525252',
  greyDark: '#646464',
  greyShadow: '#d4d4d4',
  black: '#000000',
  clear: 'rgba(0,0,0,0)',
  blackAlpha32: 'rgba(0,0,0,0.32)',
  whiteAlpha50: 'rgba(255,255,255,50)',
  pinkBg: '#B22E6F',
  ivory: '#E5E5E5',
  black33Alpha20: 'rgba(51, 51, 51, 0.2)',
  black33: '#333333',
  greyAlpha70: 'rgba(153, 153, 153, 0.7)',
  shadowAlpha13: 'rgba(84, 16, 95, 0.13)',
  grey99: '#999999',

  greenLightGraphic: '#5FE3A1',
  greenAquaMarineGraphic: '#4fd3af',
  purpleDusk: '#43425d',

  brownishPink: '#d27474',
  lightGreyBlue: '#99b0c1',

  green100: '#E5FAF5',
  green200: '#BFF2E5',
  green300: '#8CE8D1',
  green400: '#4CDBB8',
  green500: '#00CC99',
  green600: '#00B88A',
  green700: '#009973',
  green800: '#007054',
  green900: '#003D2E',

  gray100: '#DDE0E2',
  gray200: '#BBC2C5',
  gray300: '#99A3A7',
  gray400: '#77858A',
  gray500: '#55666D',
  gray600: '#4C5C62',
  gray700: '#445257',
  gray800: '#3C474C',
  gray900: '#2A3337',

  red100: '#FFF0F0',
  red200: '#FFD9D9',
  red300: '#FFBABA',
  red400: '#FF9494',
  red500: '#FF6666',
  red600: '#E55C5C',
  red700: '#BF4C4C',
  red800: '#8C3838',
  red900: '#4D1F1F',

  blue500: '#6699FF',
  blue600: '#5C8AE5',
  blue700: '#4D78CB',
  blue900: '#132E63',

  yellow500: '#EEBB55',
  yellow600: '#D6A84C',
  yellow700: '#BE9644',
  yellow800: '#8F7033',
  yellow900: '#5F4B22',

  purple500: '#CC99FF',
  purple600: '#B88AE5',
  purple900: '#4661e5',

  cyan500: '#00CCCC',
  cyan600: '#00B8B8',

  error500: '#FF6666',

  bronze500: '#CD7F32',
  silver500: '#C0C0C0',
  gold500: '#FFD700',
};

export const buttons = {
  inlineButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 32,
  },
  singleButtonArea: {
    // height: 40,
    marginHorizontal: 32,
  },
  flatButton: {
    flex: 1,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: 2,
    backgroundColor: colors.white,
    borderRadius: 50,
  },
  raisedButton: {
    flex: 1,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: 2,
    backgroundColor: colors.green500,
    borderRadius: 50,
  },
  flatButtonText: {
    flex: 1,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: colors.green600,
    textAlign: 'center',
  },
  raisedButtonText: {
    flex: 1,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: colors.white,
    textAlign: 'center',
  },
};

export const componentStyle = {
  modalAlert: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingVertical: 24,
    paddingHorizontal: 32,
  },
  spinnerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
};

export const headerComponentStyle = {
  containerHeader: {
    minHeight: 80,
    borderTopWidth: Platform.select({ios: 20, android: 0}),
    borderColor: colors.gray600,
    backgroundColor: colors.gray500,
    flexDirection: 'row',
  },

  containerHeaderLeft: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: colors.gray500,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    margin: 5,
    color: colors.white,
  },

  back: {
    width: 95,
    margin: 5,
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
  },

  backImage: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },

  backText: {
    alignItems: 'flex-start',
    color: colors.white,
    fontSize: 14,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 1.5,
  },

  title: {
    margin: 10,
    alignSelf: 'center',
  },
};

export const label = {
  labelLarge: {
    fontSize: 22,
    lineHeight: 24,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  labelMedium: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  labelSmall: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  labelTiny: {
    fontSize: 8,
    lineHeight: 8,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
};

export const body = {
  default: {
    fontSize: 20,
    lineHeight: 24,
  },

  small: {
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.5,
  },

  modalAlert: {
    backgroundColor: colors.white,
    borderRadius: 15,
    paddingVertical: 24,
    paddingHorizontal: 32,
  },
};

export const title = {
  fontSize: 38,
  lineHeight: 40,
};

export const subtitle = {
  fontSize: 26,
  lineHeight: 32,
};

export default {
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  inputText: {
    color: colors.greenMedium,
  },

  disableText: {
    color: colors.grey,
    fontWeight: 'bold',
  },

  labelText: {
    color: colors.greenMedium,
  },
};
