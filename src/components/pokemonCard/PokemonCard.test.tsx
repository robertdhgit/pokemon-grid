import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { PokemonCard } from './PokemonCard';
import type { Pokemon } from 'pokenode-ts';

const mockPokemon = {
  id: 1,
  name: 'bulbasaur',
  sprites: {
    front_default: 'front.png',
    other: {
      'official-artwork': {
        front_default: 'artwork.png',
      },
    },
  },
} as unknown as Pokemon;

describe('PokemonCard', () => {
  test('Renders pokemon name', () => {
    render(<PokemonCard pokemon={mockPokemon} />);

    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
  });

  test('Renders pokemon image', () => {
    render(<PokemonCard pokemon={mockPokemon} />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'artwork.png');
  });
});
