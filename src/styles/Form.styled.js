import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .Dropdown-control {
    width: 200px;
    border: unset;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    color: ${({ theme, mode }) =>
    mode === 'light' ? theme.light.text : theme.dark.text
  };
    background-color: ${({ theme, mode }) =>
    mode === 'light' ? '#fff' : theme.dark.element
  };
    font-size: ${({ theme }) => theme.font.details};
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

export const Searchbar = styled.div`
  width: 400px;
  position: relative;
  padding: 10px 25px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme, mode }) =>
    mode === 'light' ? '#fff' : theme.dark.element
  };
  color: ${({ theme, mode }) =>
    mode === 'light' ? theme.light.text : theme.dark.text
  };

  svg {
    opacity: 0.7;
  }

  input {
    margin-left: 20px;
    border: none;
    width: 80%;
    font-size: ${({ theme }) => theme.font.home};
    background-color: ${({ theme, mode }) =>
    mode === 'light' ? '#fff' : theme.dark.element
  };
    color: ${({ theme, mode }) =>
    mode === 'light' ? theme.light.text : theme.dark.text
  };

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 425px) {
    margin: 0 auto;
    width: 300px;
  }
`;