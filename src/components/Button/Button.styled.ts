import styled from "styled-components";

//styled
import { Text } from "components/Typography/Typography.styled";

export const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 2px;
  padding: 5px 0;
  border: 1px solid ${({ theme }) => theme.colors.text_primary};
  transition: 0.3s ease-in;

  :hover {
    background: ${({ theme }) => theme.colors.text_primary};
  }
  :hover > ${Text} {
    color: ${({ theme }) => theme.colors.background_primary};
  }
`;
