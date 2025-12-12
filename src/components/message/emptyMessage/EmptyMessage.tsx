import type { ReactNode } from 'react';
import styled from 'styled-components';

type EmptyMessageProps = {
  children: ReactNode;
};

export function EmptyMessage({ children }: EmptyMessageProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.p`
  margin-top: 16px;
  font-size: 16px;
  color: #999;
  text-align: center;
`;
