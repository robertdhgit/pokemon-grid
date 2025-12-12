import { createFileRoute } from '@tanstack/react-router';
import { usePokemonList } from '../hooks/usePokemonList';
import { ErrorMessage, LoadingMessage, Modal, PokemonCard, PokemonGrid } from '../components';
import { useFavorites } from '../hooks/useFavorites';
import { useState } from 'react';
import type { Pokemon } from 'pokenode-ts';
import { EmptyMessage } from '../components/message';

export const Route = createFileRoute('/pokemon')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading, error } = usePokemonList(50);
  const { toggleFavorite, isFavorite } = useFavorites();
  const [selected, setSelected] = useState<Pokemon | null>(null);

  if (isLoading) return <LoadingMessage>Loading Pokemons...</LoadingMessage>;
  if (error) return <ErrorMessage>Error loading pokemons</ErrorMessage>;
  if (!data) return <EmptyMessage>No pokemons showing</EmptyMessage>;

  return (
    <section aria-labelledby="pokemon-heading">
      <h1 id="pokemon-heading">Pokemon Images</h1>
      <PokemonGrid>
        {data.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={() => setSelected(pokemon)} />
        ))}
      </PokemonGrid>
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <>
            <h2 style={{ textTransform: 'capitalize' }}>{selected?.name}</h2>
            <img
              src={
                selected.sprites.other?.['official-artwork']?.front_default ??
                selected.sprites.front_default ??
                ''
              }
              width={200}
            />

            <p>Height: {selected.height}</p>
            <p>Weight: {selected.weight}</p>

            <p>Types:</p>
            <ul>
              {selected.types.map((t) => (
                <li key={t.slot}>{t.type.name}</li>
              ))}
            </ul>

            <button
              style={{
                marginTop: 16,
                padding: '10px 16px',
                background: isFavorite(selected.name) ? '#aaa' : '#ffcc00',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontWeight: 600,
              }}
              onClick={() => toggleFavorite(selected.name)}
            >
              {isFavorite(selected.name) ? 'favourited' : 'favourite'}
            </button>
          </>
        )}
      </Modal>
    </section>
  );
}
