import React, { PropsWithChildren } from "react";
import { Button } from "./styles";

type Props = {
  type?: "button" | "submit";
  onClick?: () => void;
};

const ButtonComponents: React.FC<Props> = ({
  type,
  onClick,
  children,
}: PropsWithChildren<Props>) => (
  <Button type={type} onClick={onClick}>
    {children}
  </Button>
);

export default ButtonComponents;
