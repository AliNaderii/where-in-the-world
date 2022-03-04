import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.element};
  height: 60px;
  box-shadow: ${({ theme }) => theme.boxShadow};
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
    color: ${({ theme }) => theme.text};
    opacity: 0.9;

    svg {
      margin-right: 5px;
    }
  }

  @media (max-width: 425px) {
    padding: 0 10px;
  }
`;