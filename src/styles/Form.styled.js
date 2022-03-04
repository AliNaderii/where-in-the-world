import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .Dropdown-control {
    width: 200px;
    border: unset;
    border-radius: 5px;
    box-shadow: 
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, 
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.element};
    font-size: ${({ theme }) => theme.font.details};
    font-weight: 600;
  }

@media(max-width: 768px) {
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
box-shadow: ${({ theme }) => theme.boxShadow};
background-color: ${({ theme }) => theme.element};
color: ${({ theme }) => theme.text};

  svg {
  opacity: 0.7;
}

  input {
  margin-left: 20px;
  border: none;
  width: 80%;
  font-size: ${({ theme }) => theme.font.home};
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};

    &:focus {
    outline: none;
  }
}

@media (max-width: 425px) {
  margin: 0 auto;
  width: 300px;
}
`;