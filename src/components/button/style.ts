import styled from 'styled-components/macro';

interface Props {
  display?: string,
  bgColor?: string
}


export const Button = styled.button<Props>`
  margin: 20px 10px;
  padding: 10px;
  background-color: ${(props) => props.bgColor};
  color: #fff;
  font-size: 14px;
  outline: none;
  display: ${(props) => props.display};

  &:hover {
    opacity: 0.8;
  }

  @media screen and (min-width: 400px) {
    font-size: 16px;
  }
`;
