import styled from "styled-components";

export const Container = styled.main`
  width: 90%;
  margin: 0 auto;
  padding-top: 25px;
  font-size: ${({ text }) => text};
  color: ${({ theme, mode }) =>
    mode === 'light' ? theme.light.text : theme.dark.text
  };
`;