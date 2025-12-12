import { createFileRoute } from '@tanstack/react-router';
import { usePokemonList } from '../hooks/usePokemonList';
import { PokemonCard } from '../components';

export const Route = createFileRoute('/pokemon')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading, error } = usePokemonList(50);

  if (isLoading) return <p>Loading Pokemons...</p>;
  if (error) return <p>Error loading pokemons</p>;
  if (!data) return <p>No pokemons showing</p>;

  return (
    <section aria-labelledby="pokemon-heading">
      <h1 id="pokemon-heading">Pokemon Images</h1>
      {data.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </section>
  );
}
