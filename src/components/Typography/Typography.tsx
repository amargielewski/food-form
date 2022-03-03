import { ReactChild } from "react";
import { ThemeType } from "theme";

//styled
import { Text } from "./Typography.styled";

export type TypographyVariant =
  | "headingLarge"
  | "textLarge"
  | "textSmall"
  | "textMedium";

export type TypographyProps = {
  children: ReactChild;
  fontSize?: keyof ThemeType["fontSizes"];
  fontWeight?: keyof ThemeType["fontWeights"];
  color?: keyof ThemeType["colors"];
  textTransform?: "uppercase" | "capitalize";
  as?: "p" | "span" | "h2";
};
export const Typography = ({ children, ...props }: TypographyProps) => {
  return <Text {...props}>{children}</Text>;
};
