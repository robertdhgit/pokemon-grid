import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { EmptyMessage } from './EmptyMessage';

describe('EmptyMessage', () => {
  test('renders default empty message', () => {
    render(<EmptyMessage>Empty message</EmptyMessage>);

    expect(screen.getByText('Empty message')).toBeInTheDocument();
  });

  test('applies correct styles', () => {
    render(<EmptyMessage>Empty</EmptyMessage>);

    const message = screen.getByText('Empty');

    expect(message).toHaveStyle({
      marginTop: '16px',
      fontSize: '16px',
      color: '#999',
      textAlign: 'center',
    });
  });
});
