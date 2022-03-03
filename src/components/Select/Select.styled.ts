import styled from "styled-components";

//components
import { Input } from "components";

export const StyledInput = styled(Input)`
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const Options = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.text_primary};
  width: 100%;
  z-index: 1;
`;

export const Option = styled.div<{
  isActive: boolean;
}>`
  color: ${({ theme }) => theme.colors.input_text};
  padding: 10px 15px;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text_primary};
    background: ${({ theme }) => theme.colors.background_primary}4d;
  }

  ${({ isActive, theme }) =>
    isActive &&
    `
    background:  ${theme.colors.background_primary}99;
    color:${theme.colors.text_primary};
  `}
`;

export const StyledInputWrapper = styled.div`
  position: relative;
`;

export const StyledArrowIconContainer = styled.div<{
  isOpen: boolean;
}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;

  svg {
    ${({ isOpen }) => isOpen && `transform: rotate(180deg)`}
  }

  * {
    color: ${({ theme }) => theme.colors.input_text};
  }
`;
