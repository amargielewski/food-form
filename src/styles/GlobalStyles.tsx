import { createGlobalStyle } from "styled-components";
import { resetCSS } from "./resetCSS";

export const GlobalStyle = createGlobalStyle`
${resetCSS}

body,html,* {
   font-family: 'Montserrat', sans-serif;
   color: #fafafa;
   box-sizing: border-box;
}

`;
