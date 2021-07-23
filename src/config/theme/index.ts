import gridTheme from "./grid";

const baseSize = 8;

const sizes = {
  fourthBase: `${baseSize / 4}px`,
  halfBase: `${baseSize / 2}px`,
  base: `${baseSize}px`,
  menuWidth: `${8 * baseSize}px`,
  headerHeight: `${8 * baseSize}px`,
  sidebarWidth: `${64 * baseSize}px`,
  containerPaddingHorizontal: `${16 * baseSize}px`,
  rowMarginVertical: `${3 * baseSize}px`,
  borderRadius: `${baseSize / 2}px`,
};

const colors = {
  primaryLight: "#5EA8FF",
  primary: "#2B8DFF",
  primaryDark: "#0072F7",
  secondaryLight: "#2e2e2f",
  secondary: "#1D1D1E",
  secondaryDark: "#040404",
  infoLight: "#2B8DFF",
  info: "#0072F7",
  infoDark: "#0067DE",
  successLight: "#5DCA91",
  success: "#3cb877",
  successDark: "#2f925e",
  warningLight: "#FAD94D",
  warning: "#F8CF1C",
  warningDark: "#DAB307",
  dangerLight: "#FE9745",
  danger: "#FE7B12",
  dangerDark: "#DC6201",
  errorLight: "#FF7D63",
  error: "#ff5230",
  errorDark: "#fc2900",
  textPrimary: "#1d1d1e",
  textSecondary: "#858585",
  textDisabled: "#cbcbcb",
  textOnDark: "#FFFFFF",
  background: "#F8F8F8",
  backgroundPaper: "#FFFFFF",
  neutralDark: "#858585",
  neutralMedium: "#CBCBCB",
  neutralLight: "#EAEAEA",
  divider: "#EAEAEA",
  dividerDark: "#2E2E2F",
  secondaryMain: "#1D1D1E",
};

const opacity = {
  default: 0.08,
  "0.2": 0.2,
};

const typography = {
  h1: {
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "40px",
    color: colors.textPrimary,
  },
  h2: {
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "36px",
    color: colors.textPrimary,
  },
  h3: {
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "28px",
    color: colors.textPrimary,
  },
  h4: {
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    color: colors.textPrimary,
  },
  h5: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "24px",
    color: colors.textPrimary,
  },
  body: {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "22px",
    color: colors.textPrimary,
  },
  bodySmall: {
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "20px",
    color: colors.textPrimary,
  },
  label: {
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "20px",
    color: colors.textPrimary,
  },
  caption: {
    fontWeight: "normal",
    fontSize: "11px",
    lineHeight: "18px",
    color: colors.textSecondary,
  },
};

const defaultTheme = {
  sizes,
  colors,
  typography,
  opacity,
};

export type ThemeType = typeof defaultTheme;
export type StyledThemePropsType = { theme: ThemeType };
export type TypographyKeyType = keyof typeof defaultTheme.typography;

export { gridTheme };

export default defaultTheme;
