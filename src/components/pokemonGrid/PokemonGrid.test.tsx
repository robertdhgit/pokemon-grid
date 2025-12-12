import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { PokemonGrid } from './PokemonGrid';

describe('PokemonGrid', () => {
  test('renders children correctly', () => {
    const { getByText } = render(
      <PokemonGrid>
        <div>Card 1</div>
        <div>Card 2</div>
      </PokemonGrid>,
    );

    expect(getByText('Card 1')).toBeInTheDocument();
    expect(getByText('Card 2')).toBeInTheDocument();
  });
});
