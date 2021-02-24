import { Button } from '../button/style';

interface Props {
  type?: any;
  onClick?: any;
  children: string;
  bgColor?: string;
}

function ButtonComponents({ type, onClick, children, bgColor }: Props) {
  return (
    <Button type={type} onClick={onClick} bgColor={bgColor}>
      {children}
    </Button>
  );
}

export default ButtonComponents;
