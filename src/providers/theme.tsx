import { ReactChild } from "react";
import { useThemeModeContext } from "./themeMode";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "theme";
//style
import { GlobalStyle } from "styles";

type ThemeProviderProps = {
  children: ReactChild;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeModeContext = useThemeModeContext();
  return (
    <StyledThemeProvider theme={theme[themeModeContext?.mode ?? "light"]}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
