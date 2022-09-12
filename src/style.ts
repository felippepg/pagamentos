import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 2vw auto;
  height: 80vh;

  
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 600px) {
    height: 100vh;
  }
`;

export const Box = styled.aside`
  display: flex;
  justify-content: end;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;
