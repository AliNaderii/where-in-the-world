import styled from "styled-components";

export const StyledCards = styled.section`
  width: 100%;
  padding-top: 35px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px 70px;
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
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  height: fit-content;
  padding-bottom: 30px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.text};

  @media (max-width: 425px) {
    width: 300px;
  }
`;

export const Flag = styled.img`
  width: 100%;
  height: 150px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

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

  h2 {
    margin: 15px 0;
    font-size: 18px;
  }
`;