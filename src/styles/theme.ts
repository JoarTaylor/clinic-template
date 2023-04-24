import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "rgb(26, 40, 70)",
    accent: "#FFA500",
    selected: "#86d3a4",
  },
};

export const breakpoints = {
  mobile: "@media screen and (max-width: 900px)",
  laptop: "@media screen and (min-width: 900px)",
};

const GlobalStyles = createGlobalStyle`
html {
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    margin: 0;
  }

  #root {
    margin: 0 auto;
}
`;

export default GlobalStyles;
