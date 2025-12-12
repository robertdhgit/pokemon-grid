import type { ReactNode } from 'react';
import styled from 'styled-components';

type LoadingMessageProps = {
  children: ReactNode;
};

export function LoadingMessage({ children }: LoadingMessageProps) {
  return <Wrapper role="status">{children}</Wrapper>;
}

const Wrapper = styled.p`
  margin-top: 16px;
  font-size: 16px;
  color: #666;
  text-align: center;
`;
