import { ButtonHTMLAttributes, ReactChild } from "react";

//styled
import { StyledButton } from "./Button.styled";

export type ButtonProps = {
  children: ReactChild;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
