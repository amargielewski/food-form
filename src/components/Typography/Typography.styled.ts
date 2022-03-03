import styled from "styled-components";
import { ThemeType } from "theme";

export const Text = styled.p<{
  fontSize?: keyof ThemeType["fontSizes"];
  fontWeight?: keyof ThemeType["fontWeights"];
  color?: keyof ThemeType["colors"];
  textTransform?: "uppercase" | "capitalize";
}>`
  font-size: ${({ theme, fontSize }) =>
    theme.fontSizes[fontSize ?? theme.fontSizes.s]}px;
  color: ${({ color, theme }) =>
    theme.colors[color ?? theme.fontSizes.text_primary]};
  font-weight: ${({ fontWeight, theme }) =>
    theme.fontWeights[fontWeight ?? theme.fontWeights.normal]};
  text-transform: ${({ textTransform }) => textTransform};
`;
