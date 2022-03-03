import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.text_primary}4d;
`;

export const StyledFooterLink = styled.a`
  text-decoration: none;
  display: flex;
  gap: 0 10px;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  color: ${({ theme }) => theme.colors.text_primary};
`;
