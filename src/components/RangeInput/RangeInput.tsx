import { InputHTMLAttributes, forwardRef } from "react";

//styled
import { StyledInput } from "./RangeInput.styled";

export type RangeInputProps = {
  type?: "range";
} & InputHTMLAttributes<HTMLInputElement>;

export const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
  ({ type = "range", ...props }, ref) => {
    return <StyledInput type={type} ref={ref} {...props} />;
  }
);
