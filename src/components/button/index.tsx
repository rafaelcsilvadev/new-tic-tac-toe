import { Button } from '../button/style';

interface Props {
	type?: any,
	onClick?: any,
	children: string,
	display?: string,
	bgColor?: string

}

function ButtonComponents({ type, onClick, children, display, bgColor }: Props) {
	return (
		<Button type={type} onClick={onClick} display={display} bgColor={bgColor}>
			{children}
		</Button>
	);
}

export default ButtonComponents;
