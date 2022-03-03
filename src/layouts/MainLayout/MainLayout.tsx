import { ReactChild } from "react";

//components
import { Header, Footer } from "components";

//styled
import { StyledContentContainer, StyledWrapper } from "./MainLayout.styled";

type MainLayoutProps = {
  children: ReactChild;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <StyledWrapper>
      <Header />
      <StyledContentContainer>{children}</StyledContentContainer>
      <Footer />
    </StyledWrapper>
  );
};
