import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text
  };
    transition: all 0.4s linear
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