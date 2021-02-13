import styled from "styled-components/macro";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxScore = styled.div`
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 400px) {
    width: 20%;
  }
`;

export const ScoreStyle = styled.span`
  font-size: 16px;
  padding: 0 10px;
  text-align: center;

  @media screen and (min-width: 400px) {
    font-size: 20px;
  }
`;

export const House = styled.button`
  background: none;
  border: 2px solid #fff;
  width: 80px;
  height: 80px;
  font-size: 50px;
  text-align: center;
  padding: 0;
  outline: none;
  float: left;

  @media screen and (min-width: 400px) {
    width: 100px;
    height: 100px;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  flex-direction: row;
`;
