import {
  StyledWrapper,
  StyledToggleButton,
  StyledSiteTitle,
} from "./Header.styled";
import { TablewareIcon, SunIcon, MoonIcon } from "icons";
import { useThemeModeContext } from "providers/themeMode";

export const Header = () => {
  const themeModeContext = useThemeModeContext();

  return (
    <StyledWrapper>
      <TablewareIcon />
      <StyledSiteTitle
        fontSize="xl"
        fontWeight="bold"
        as="h2"
        textTransform="uppercase"
      >
        Food form
      </StyledSiteTitle>
      <StyledToggleButton onClick={themeModeContext?.toggleThemeMode}>
        {themeModeContext?.mode === "dark" && <SunIcon />}
        {themeModeContext?.mode === "light" && <MoonIcon />}
      </StyledToggleButton>
    </StyledWrapper>
  );
};
