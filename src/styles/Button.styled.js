import styled from "styled-components";

export const StyledButton = styled.button`
  margin-top: ${({ top }) => top};
  padding: ${({ padding }) => padding ? padding : '10px'};
  width: ${({ width }) => width};
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: 50px;
  font-weight: 600;
  border-radius: 5px;

  svg {
    margin-right: 10px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;