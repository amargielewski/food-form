import styled from "styled-components";

//components
import { Input } from "components";

export const StyledInput = styled(Input)`
  padding-right: 108px;
`;

export const StyledInputWrapper = styled.div`
  position: relative;
`;

export const StyledInputButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  height: 100%;
`;

export const StyledNumberInputButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 0 15px;
  cursor: pointer;
  transition: 0.3s;

  * {
    color: ${({ theme }) => theme.colors.input_text};
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.background_primary}4d;

    * {
      color: ${({ theme }) => theme.colors.text_primary};
    }
  }
`;
