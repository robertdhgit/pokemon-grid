import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ErrorMessage } from './ErrorMessage';

describe('FormErrorMessage', () => {
  test('renders error message text', () => {
    render(<ErrorMessage>Password is required</ErrorMessage>);

    expect(screen.getByText('Password is required')).toBeInTheDocument();
  });

  test('applies correct styles', () => {
    render(<ErrorMessage>Error</ErrorMessage>);

    const message = screen.getByText('Error');

    expect(message).toHaveStyle({
      marginTop: '8px',
      fontSize: '14px',
      color: 'rgb(255, 0, 0)',
    });
  });
});
