import { ReactChild } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type NotificationProviderType = {
  children: ReactChild | ReactChild[];
};

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast-body {
    div {
      color: ${({ theme }) => theme.colors.input_text};
    }
  }
`;

export const NotificationProvider = ({
  children,
}: NotificationProviderType) => {
  return (
    <>
      <StyledToastContainer
        position="bottom-left"
        autoClose={10000}
        closeOnClick
      />
      {children}
    </>
  );
};
