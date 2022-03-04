import styled from "styled-components";

export const StyledNotFound = styled.section`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(theme) => theme.text};
  font-size: 32px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 425px) {
    font-size: 20px;
    text-align: center;
  }
`;