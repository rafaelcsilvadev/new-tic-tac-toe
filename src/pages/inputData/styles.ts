import styled from 'styled-components/macro';

export const Main = styled.main`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const BoxData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 80%;

	@media screen and (min-width: 400px) {
		width: 100%;
	}
`;

export const Label = styled.label`
	margin: 20px 0;
	font-size: 16px;

	@media screen and (min-width: 400px) {
		font-size: 20px;
	}
`;

export const Input = styled.input`
	padding: 5px;
	font-size: 14px;
	outline: none;

	@media screen and (min-width: 400px) {
		font-size: 16px;
	}
`;

export const Select = styled.select`
	padding: 4px;
	margin: 0 0 0 10px;
	font-size: 14px;
	outline: none;

	@media screen and (min-width: 400px) {
		font-size: 16px;
	}
`;

export const BoxButton = styled.div`
  display: flex;
  flex-direction: row;
`;