import styled from 'styled-components/macro';

interface Props {
  color?: string | '#fff';
  display?: string;
}

export const Section = styled.section`
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

export const ScoreStyle = styled.span<Props>`
  font-size: 16px;
  padding: 0 10px;
  text-align: center;
  color: ${(props) => props.color};

  @media screen and (min-width: 400px) {
    font-size: 20px;
  }
`;
