import { PaletteColor, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const { palette } = createTheme();
const { augmentColor } = palette;

const createColor = (mainColor: string): PaletteColor =>
  augmentColor({ color: { main: mainColor } });

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#6a6a6a",
    },
    secondary: {
      main: "#ebebeb",
    },
    error: {
      main: red.A400,
    },
    ctaPrimary: createColor("#404040"),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#6a6a6a",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorSecondary: {
          color: "#6a6a6a",
        },
      },
    },
  },
});

export default theme;
