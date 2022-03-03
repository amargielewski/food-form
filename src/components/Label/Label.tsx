import { ReactChild } from "react";
import { FieldError } from "react-hook-form";

//components
import { Typography } from "components";

//styled
import {
  StyledErrorMessage,
  StyledErrorWrapper,
  StyledLabel,
} from "./Label.styled";

type LabelProps = {
  children: ReactChild | ReactChild[];
  text: string;
  error?: FieldError;
};

export const Label = ({ children, text, error }: LabelProps) => {
  return (
    <StyledLabel>
      <Typography
        fontSize="s"
        fontWeight="semiBold"
        as="span"
        color="text_primary"
        textTransform="capitalize"
      >
        {text}
      </Typography>
      {children}
      {error && (
        <StyledErrorWrapper>
          <StyledErrorMessage
            fontSize="s"
            fontWeight="semiBold"
            as="p"
            color="error_primary"
          >
            {error?.message ?? "Error"}
          </StyledErrorMessage>
        </StyledErrorWrapper>
      )}
    </StyledLabel>
  );
};
