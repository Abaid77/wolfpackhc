import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#ced3da",
    200: "#9da6b5",
    300: "#6b7a8f",
    400: "#3a4d6a",
    500: "#092145",
    600: "#071a37",
    700: "#051429",
    800: "#040d1c",
    900: "#02070e",
  },

  secondary: {
    100: "#fdf4dd",
    200: "#fbeaba",
    300: "#fadf98",
    400: "#f8d575",
    500: "#f6ca53",
    600: "#c5a242",
    700: "#947932",
    800: "#625121",
    900: "#312811",
  },

  neutral: {
    100: "#f5f5f5",
    200: "#ecebeb",
    300: "#e2e1e1",
    400: "#d9d7d7",
    500: "#cfcdcd",
    600: "#a6a4a4",
    700: "#7c7b7b",
    800: "#535252",
    900: "#292929",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
    typography: {
      fontFamily: ["Fauna One", "sans-serif"].join(","),
      fontSize: 11,
      h1: {
        fontFamily: ["Cinzel", "sans-serif"].join(","),
        fontSize: 48,
      },
      h2: {
        fontFamily: ["Cinzel", "sans-serif"].join(","),
        fontSize: 36,
      },
      h3: {
        fontFamily: ["Cinzel", "sans-serif"].join(","),
        fontSize: 20,
      },
      h4: {
        fontFamily: ["Cinzel", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  },
});
