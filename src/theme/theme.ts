export type ThemeType = typeof theme.light;

const defaultTheme = {
  fontSizes: {
    xs: "16",
    s: "20",
    m: "24",
    l: "30",
    xl: "40",
  },
  fontWeights: {
    normal: 500,
    semiBold: 600,
    bold: 700,
  },
};

export const theme = {
  light: {
    colors: {
      text_primary: "#fafafa",
      input_text: "#020202",
      background_primary: "#32A287",
      error_primary: "#DF2935",
      input_focus: "#FF7118",
    },
    ...defaultTheme,
  },
  dark: {
    colors: {
      text_primary: "#fafafa",
      input_text: "#020202",
      background_primary: "#0B132B",
      error_primary: "#DF2935",
      input_focus: "#FF7118",
    },
    ...defaultTheme,
  },
};
