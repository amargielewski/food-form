import styled from "styled-components";

//styled
import { Text } from "components/Typography/Typography.styled";

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 10px;
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.text_primary};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text_primary}4d;
  position: relative;

  @media (max-width: 700px) {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }

  @media (max-width: 440px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  }
`;

export const StyledToggleButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  font-size: ${({ theme }) => theme.fontSizes.l}px;

  @media (max-width: 700px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    right: 10px;
  }
`;

export const StyledSiteTitle = styled(Text)`
  @media (max-width: 700px) {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }

  @media (max-width: 440px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
  } ;
`;
