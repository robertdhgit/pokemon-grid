import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { LoadingMessage } from './LoadingMessage';

describe('LoadingMessage', () => {
  test('renders loading message content', () => {
    render(<LoadingMessage>Loading...</LoadingMessage>);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('has status role for accessibility', () => {
    render(<LoadingMessage>Loading Pokémon...</LoadingMessage>);

    const message = screen.getByRole('status');

    expect(message).toHaveTextContent('Loading Pokémon...');
  });

  test('applies correct styles', () => {
    render(<LoadingMessage>Loading</LoadingMessage>);

    const message = screen.getByText('Loading');

    expect(message).toHaveStyle({
      marginTop: '16px',
      fontSize: '16px',
      color: '#666',
      textAlign: 'center',
    });
  });
});
