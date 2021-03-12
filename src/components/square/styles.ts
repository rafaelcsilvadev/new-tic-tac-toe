import styled from "styled-components/macro";

interface Props {
  color?: string;
  display?: string;
}

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxSquares = styled.div<Props>`
  display: ${(props) => props.display};
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

export const BoxWin = styled.div<Props>`
  width: 298px;
  height: 298px;
  border: 2px solid #fff;
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  font-size: 16px;
  color: #3df024;

  @media screen and (min-width: 400px) {
    font-size: 20px;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  flex-direction: row;
`;
