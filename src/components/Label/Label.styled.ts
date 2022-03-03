import { Text } from "components/Typography/Typography.styled";
import styled from "styled-components";

export const StyledLabel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  position: relative;
`;

export const StyledErrorWrapper = styled.div`
  position: absolute;
  bottom: -25px;
`;

export const StyledErrorMessage = styled(Text)`
  @media (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
  }
`;
