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
	width: 20%;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ScoreStyle = styled.span`
  font-size: 16px;
  width: 20%;
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
  outline: none;

  @media screen and (min-width: 400px) {
    width: 100px;
    height: 100px;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  flex-direction: row;
`;
