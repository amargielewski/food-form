import { forwardRef, InputHTMLAttributes } from "react";

//icons
import { PlusIcon, MinusIcon } from "icons";

//styled
import {
  StyledInputButtonWrapper,
  StyledInputWrapper,
  StyledNumberInputButton,
  StyledInput,
} from "./NumericInput.styled";

type InputProps = {
  error?: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
  maxLength?: number;
} & InputHTMLAttributes<HTMLInputElement>;

export const NumericInput = forwardRef<HTMLInputElement, InputProps>(
  ({ error, onIncrement, onDecrement, type = "number", ...props }, ref) => {
    return (
      <StyledInputWrapper>
        <StyledInput type="number" error={error} ref={ref} {...props} />
        <StyledInputButtonWrapper>
          <StyledNumberInputButton onClick={onIncrement}>
            <PlusIcon />
          </StyledNumberInputButton>
          <StyledNumberInputButton onClick={onDecrement}>
            <MinusIcon />
          </StyledNumberInputButton>
        </StyledInputButtonWrapper>
      </StyledInputWrapper>
    );
  }
);
