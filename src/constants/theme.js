import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

import { Manrope } from "@expo-google-fonts/manrope";

export const COLORS = {
  // base colors
  primary900: "#071C39",
  primary800: "#0A2644",
  primary: "#0E3150",
  primary700: "#3E5A73",
  primary600: "#576F85",
  primary500: "#6E8396",
  primary400: "#8697A7",
  primary300: "#B7C2CB",

  success900: "#095D37",
  success800: "#0D6F39",
  success: "#128239",
  success700: "#419B61",
  success600: "#5AA875",
  success500: "#71B488",
  success400: "#88C09B",
  success300: "#B8DAC4",

  info900: "#04135B",
  info800: "#0F37A4",
  info: "#1548BF",
  info700: "#446DCC",
  info600: "#5C7FD3",
  info500: "#7391D9",
  info400: "#89A3DE",
  info300: "#B9C9EC",

  warning900: "#AA5400",
  warning800: "#CB6E00",
  warning: "#ED8A00",
  warning700: "#F1A133",
  warning600: "#F3AE4D",
  warning500: "#F4B966",
  warning400: "#F5C47F",
  warning300: "#FADCB3",

  danger900: "#900C2F",
  danger800: "#AC112C",
  danger: "#C91827",
  danger700: "#D44752",
  danger600: "#DA5E69",
  danger500: "#DF757E",
  danger400: "#E38B93",
  danger300: "#EFBABF",

  //   text colors
  text1000: "#020E26",
  text900: "#1C273C",
  text800: "#353E51",
  text700: "#4E5768",
  text600: "#676E7D",
  text500: "#808692",
  text400: "#9A9FA8",
  text300: "#B4B7BE",
};

export const SIZES = {
  borderRadius: 10,

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
};

export const FONTS = {
  h1: {
    fontFamily: "Manrope",
    fontWeight: "600",
    fontSize: SIZES.h1,
    lineHeight: 72,
  },
  h2: {
    fontFamily: "Manrope",
    fontWeight: "600",
    fontSize: SIZES.h2,
    lineHeight: 48,
  },
  h3: {
    fontFamily: "Manrope",
    fontWeight: "600",
    fontSize: SIZES.h3,
    lineHeight: 40,
  },
  h4: {
    fontFamily: "Manrope",
    fontWeight: "600",
    fontSize: SIZES.h4,
    lineHeight: 32,
  },
  h5: {
    fontFamily: Manrope,
    fontWeight: "600",
    fontSize: SIZES.h5,
    lineHeight: 24,
  },
  h6: {
    fontFamily: "Manrope",
    fontWeight: "600",
    fontSize: SIZES.h6,
    lineHeight: 20,
  },
  body1: {
    fontFamily: "Inter",
    fontWeight: "200",
    fontSize: SIZES.body1,
    lineHeight: 18,
  },
  body2: {
    fontFamily: "Inter",
    fontWeight: "200",
    fontSize: SIZES.body2,
    lineHeight: 16,
  },
  body3: {
    fontFamily: "Inter",
    fontWeight: "200",
    fontSize: SIZES.body3,
    lineHeight: 14,
  },
  caption: {
    fontFamily: "Inter",
    fontWeight: "200",
    fontSize: SIZES.caption,
    lineHeight: 12,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
