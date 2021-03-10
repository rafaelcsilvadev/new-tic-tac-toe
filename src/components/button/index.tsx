import { Button } from './style';

interface Props {
  type?: any;
  onClick?: () => void;
  children: string;
  bgColor: string;
}

function ButtonComponents({ type, onClick, children, bgColor }: Props) {
  return (
    <Button type={type} onClick={onClick} bgColor={bgColor}>
      {children}
    </Button>
  );
}

export default ButtonComponents;
