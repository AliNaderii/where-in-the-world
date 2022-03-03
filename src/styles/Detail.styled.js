import styled from "styled-components";

export const StyledDetail = styled.section`
  display: flex;
  margin-top: 35px;
  justify-content: space-between;
  gap: 100px;
  width: 100%;
  height: fit-content;

  div {
    width: 100%;

    img {
    width: 100%;
    height: 400px;
  }
  }

  /* MEDIA QUERY */
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 50px;
  }

  /* MEDIA QUERY */
  @media (max-width: 600px) {
    div {
      img {
        height: 300px;
      }
    }
  }
`;

export const InfoSection = styled.section`
  width: 100%;

  h2 {
    margin-bottom: 20px;
  }

  p {
    font-weight: 600;

    span {
      color: ${({ theme }) => theme.input};
      font-weight: 600;
    }
  }
`;

export const CountryInfo = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  div {
    line-height: 35px;
  }

  /* MEDIA QUERY */
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const BorderCountries = styled.div`

  div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: stretch;
    gap: 5px;
    margin: 10px 0;
  };
  

  p {
    margin-right: 2px;
  }
`;