import { useState, useRef, forwardRef } from "react";
import { useOnClickOutside } from "hooks";

//icons
import { ArrowDownIcon } from "icons";

//styled
import {
  Options,
  Option,
  SelectWrapper,
  StyledArrowIconContainer,
  StyledInput,
  StyledInputWrapper,
} from "./Select.styled";

type SelectProps = {
  options: string[];
  placeholder: string;
  value: string;
  onChange: (option: string) => void;
  error: boolean;
};

export const Select = forwardRef(
  ({ options, placeholder, value, onChange, error }: SelectProps, _) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeDropdown = () => setIsOpen(false);
    const openDropdown = () => setIsOpen(true);
    const wrapperRef = useRef(null);

    useOnClickOutside(wrapperRef, closeDropdown);

    return (
      <SelectWrapper ref={wrapperRef}>
        <StyledInputWrapper onClick={openDropdown}>
          <StyledInput
            error={error}
            readOnly
            defaultValue={value}
            placeholder={placeholder}
          />
          <StyledArrowIconContainer isOpen={isOpen}>
            <ArrowDownIcon />
          </StyledArrowIconContainer>
        </StyledInputWrapper>
        {isOpen && (
          <Options>
            {options.map((option) => (
              <Option
                isActive={option === value}
                key={option}
                onClick={() => {
                  closeDropdown();
                  onChange(option);
                }}
              >
                {option}
              </Option>
            ))}
          </Options>
        )}
      </SelectWrapper>
    );
  }
);
