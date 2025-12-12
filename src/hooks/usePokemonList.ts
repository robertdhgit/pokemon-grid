import { useQuery } from '@tanstack/react-query';
import { pokemonApi } from '../api/pokemon';
import type { Pokemon } from 'pokenode-ts';

export function usePokemonList(limit = 50) {
  return useQuery<Pokemon[]>({
    queryKey: ['pokemonFullList', limit],
    queryFn: async () => {
      const res = await pokemonApi.listPokemons(0, limit);

      const details = await Promise.all(
        res.results.map((item) => pokemonApi.getPokemonByName(item.name)),
      );

      return details;
    },
  });
}
