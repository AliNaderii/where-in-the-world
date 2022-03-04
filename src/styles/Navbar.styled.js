import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  width: 100%;
  background-color: ${({ theme, mode }) =>
    mode === 'light' ? '#fff' : theme.dark.background
  };
  height: 60px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  h1 {
    font-size: 20px;
  }

  button {
    font-size: ${({ theme }) => theme.font.details};
    font-weight: 600;
    color: ${({ theme, mode }) =>
    mode === 'light' ? theme.light.text : theme.dark.text
  };
    opacity: 0.9;

    svg {
      margin-right: 5px;
    }
  }

  @media (max-width: 425px) {
    padding: 0 10px;
  }
`;