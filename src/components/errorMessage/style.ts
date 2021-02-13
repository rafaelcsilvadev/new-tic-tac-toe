import styled from 'styled-components/macro';

interface Props{
  display?: string
}

export const Message = styled.span<Props>`
  color: #f01a0d;
  display: ${props => props.display};
  margin: 10px 0 0 0;
`;
