import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px 0;
  min-height: 100vh;
  transition: 0.5s ease-in;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const StyledContentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
  flex: 1;
`;
