import { InputHTMLAttributes, forwardRef } from "react";

//styled
import { StyledInput } from "./Input.styled";

type InputProps = {
  error?: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
  type?: "text" | "number";
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", error, onIncrement, onDecrement, ...props }, ref) => {
    return <StyledInput type={type} error={error} ref={ref} {...props} />;
  }
);
