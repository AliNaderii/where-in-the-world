import styled from "styled-components";

export const StyledCards = styled.section`
  width: 100%;
  padding-top: 35px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px 75px;
  font-size: ${({ theme }) => theme.font.home};

  /* MEDIA QUERY */
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* MEDIA QUERY */
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-content: center;
    justify-items: center;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme, mode }) => mode === 'light' ? theme.light.background : theme.dark.element};
  border-radius: 5px;
  height: fit-content;
  padding-bottom: 30px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  color: ${({ theme, mode }) =>
    mode === 'light' ? theme.light.text : theme.dark.text
  };

  @media (max-width: 425px) {
    width: 300px;
  }
`;

export const Flag = styled.img`
  width: 100%;
  height: 150px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  /* MEDIA QUERY */
  @media (max-width: 1000px) {
    height: 200px;
  }
`;

export const Info = styled.div`
  padding: 0 20px;
  
  p {
    margin-top: 5px;
    font-weight: 800;
    
    span {
      color: ${({ theme }) => theme.input};
      font-weight: 600;
    }
  }

  h3 {
    margin: 15px 0;
  }
`;