import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  test('renders with default (primary) styles', () => {
    render(<Button>Primary</Button>);

    const button = screen.getByRole('button', { name: 'Primary' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: '#000000',
      color: '#fff',
    });
  });

  test('renders secondary variant styles', () => {
    render(<Button variant="secondary">Secondary</Button>);

    const button = screen.getByRole('button', { name: 'Secondary' });

    expect(button).toHaveStyle({
      backgroundColor: '#e5e5e5',
      color: '#111',
    });
  });

  test('can be disabled', () => {
    render(<Button disabled>Disabled</Button>);

    const button = screen.getByRole('button', { name: 'Disabled' });

    expect(button).toBeDisabled();
    expect(button).toHaveStyle({
      cursor: 'not-allowed',
      opacity: '0.6',
    });
  });
});
