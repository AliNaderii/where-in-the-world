import styled from "styled-components";

export const StyledButton = styled.button`
  margin-top: ${({ top }) => top};
  padding: ${({ padding }) => padding ? padding : '10px'};
  width: ${({ width }) => width};
  background-color: ${({ theme, mode }) =>
    mode === 'light' ? theme.light.element : theme.dark.element
  };
  color: ${({ theme, mode }) =>
    mode === 'light' ? theme.light.text : theme.dark.text
  };
  box-shadow: 
  2px 2px 3px rgba(0, 0, 0, 0.2),
  -1px -1px 5px rgba(0, 0, 0, 0.2);
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