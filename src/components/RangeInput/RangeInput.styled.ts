import styled from "styled-components";

export const StyledInput = styled.input`
  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;

  :focus {
    outline: none;
  }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;

    background: rgb(9, 241, 0);
    background: linear-gradient(
      90deg,
      rgba(9, 241, 0, 1) 0%,
      rgba(255, 157, 0, 1) 50%,
      rgba(255, 0, 0, 1) 100%
    );
  }
  ::-webkit-slider-thumb {
    height: 28px;
    width: 28px;
    background: url("https://www.svgrepo.com/show/81312/chili.svg");
    background-repeat: no-repeat;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -10px;
  }
`;
