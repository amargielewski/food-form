//components
import { Typography } from "components";

//icons
import { GithubIcon } from "icons";

//styled
import { StyledFooterLink, StyledWrapper } from "./Footer.styled";

export const Footer = () => {
  return (
    <StyledWrapper>
      <StyledFooterLink target="_blank" href="https://github.com/amargielewski">
        <GithubIcon />
        <Typography
          fontSize="l"
          fontWeight="semiBold"
          textTransform="capitalize"
          as="p"
        >
          github
        </Typography>
      </StyledFooterLink>
    </StyledWrapper>
  );
};
