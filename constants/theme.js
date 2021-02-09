import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export const COLORS = {
    // base colors
    primary: "#071C39",

    // color
    black: '#000000',
    white: '#ffffff',
    green: '#095D37',
    blue: '#04135B',
    orange: '#AA5400',
    red: '#900C2F',



}

export const SIZES = {
    // font sizes
    h1: 72,
    h2: 48,
    h3: 40,
    h4: 32,
    h5: 24,
    h6: 20,
    body1: 18,
    body2: 16,
    body3: 14,
    caption: 12,

    // app dimensions
    width,
    height,

}

export const FONTS = {
    h1: { fontFamily: 'Manrope', fontSize: SIZES.h1, lineHeight: 72 },
    h2: { fontFamily: 'Manrope', fontSize: SIZES.h2, lineHeight: 48 },
    h3: { fontFamily: 'Manrope', fontSize: SIZES.h3, lineHeight: 40 },
    h4: { fontFamily: 'Manrope', fontSize: SIZES.h4, lineHeight: 32 },
    h5: { fontFamily: 'Manrope', fontSize: SIZES.h5, lineHeight: 24 },
    h6: { fontFamily: 'Manrope', fontSize: SIZES.h6, lineHeight: 20 },
    body1: { fontFamily: 'Inter', fontSize: SIZES.body1, lineHeight: 18 },
    body2: { fontFamily: 'Inter', fontSize: SIZES.body2, lineHeight: 16 },
    body3: { fontFamily: 'Inter', fontSize: SIZES.body3, lineHeight: 14 },
    caption: { fontFamily: 'Inter', fontSize: SIZES.caption, lineHeight: 12 },
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme