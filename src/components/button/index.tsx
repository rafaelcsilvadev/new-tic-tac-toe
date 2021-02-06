import { Button } from './style';

interface Props {
	type?: any;
	onClick?: any;
	children: string;
}

export default function ButtonComponents({ type, onClick, children }: Props) {
	return (
		<Button type={type} onClick={onClick}>
			{children}
		</Button>
	);
}
