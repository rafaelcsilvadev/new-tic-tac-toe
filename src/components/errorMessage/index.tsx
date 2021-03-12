import React, { PropsWithChildren } from 'react';
import { Message } from './styles';

type Props = {
  display?: string;
};

const ErrorMessage: React.FC<Props> = ({
  display,
  children,
}: PropsWithChildren<Props>) => <Message display={display}>{children}</Message>;

export default ErrorMessage;
