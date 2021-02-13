import { Message } from './style';

interface Props {
	children: string,
	display?: string
}

 function ErrorMessage({ children, display }: Props) {
	return (
		<Message display={display}>
			{children}
		</Message>
	);
}

export default ErrorMessage;