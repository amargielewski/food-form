import styled from "styled-components";

export const StyledInput = styled.input<{ error?: boolean }>`
  width: 100%;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.input_text};
  background-color: ${({ theme }) => theme.colors.text_primary};

  border: ${({ error, theme }) =>
    error
      ? `2px solid ${theme.colors.error_primary}`
      : `2px solid ${theme.colors.text_primary}`};

  :focus {
    border: 2px solid ${({ theme }) => theme.colors.input_focus};
  }

  ::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.s}px;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  }
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
