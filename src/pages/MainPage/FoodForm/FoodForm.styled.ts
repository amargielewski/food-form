import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px 0;
`;

export const DataList = styled.datalist`
  display: flex;
  justify-content: space-between;
`;

export const DataListOption = styled.option`
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
