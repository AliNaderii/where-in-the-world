import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${({ theme, mode }) => mode === 'light' ? theme.light.background : theme.dark.background};
    color: ${({ theme, mode }) =>
    mode === 'light' ? theme.light.text : theme.dark.text
  };
  }

  li {
  list-style-type: none;
}

  button {
  border: none;
  background-color: unset;
  cursor: pointer;
  font-family: 'Nunito Sans', sans - serif;
}

  a {
  text-decoration: none;
}
`;