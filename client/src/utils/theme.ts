import { ThemeOptions, createTheme, responsiveFontSizes } from "@mui/material";
import { darken, lighten } from "@mui/material/styles";

export const getBackgroundColor = (color: string, mode: string): string =>
  mode == "dark" ? darken(color, 0.2) : lighten(color, 0.2);

export const getHoverBackgroundColor = (color: string, mode: string): string =>
  mode == "dark" ? darken(color, 0.1) : lighten(color, 0.1);

export const pxToRem = (px: number) => `${px / 22.5}rem`;

export const pxToVh = (px: number) => `${px * 0.09259}vh`;

export const pxToVw = (px: number) => `${px * 0.05208}vw`;

export const vhToPx = (vh: number) => `${vh / 0.09259}px`;

declare module "@mui/material/styles" {
  interface Theme {
    drawer: {
      drawerClose: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
      };
      drawerOpen: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
      };
    };
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    drawer: {
      drawerClose: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
      };
      drawerOpen: {
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
      };
    };
  }
}

export const theme = responsiveFontSizes(
  createTheme({
    drawer: {
      drawerClose: {
        xl: "3vw",
        lg: "4.5vw",
        md: "5.2vw",
        sm: "5.9vw",
        xs: "10.2vw",
      },
      drawerOpen: {
        xl: "8vw",
        lg: "11vw",
        md: "13vw",
        sm: "18vw",
        xs: "25vw",
      },
    },
    components: {
      // MuiTypography: {
      //   styleOverrides: {
      //     root: ({ theme }) =>
      //       theme.unstable_sx({
      //         color: "white",
      //       }),
      //   },
      // },
      MuiTab: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              color: "white",
            }),
        },
      },
    },
  })
);
