import styled from 'styled-components';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
};

export const Button = styled.button<ButtonProps>`
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: ${({ variant }) => (variant === 'secondary' ? '#e5e5e5' : '#000000')};

  color: ${({ variant }) => (variant === 'secondary' ? '#111' : '#fff')};
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
