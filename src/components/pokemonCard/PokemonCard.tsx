import styled from 'styled-components';
import type { Pokemon } from 'pokenode-ts';

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick?: () => void;
}

export function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
  const img =
    pokemon.sprites.other?.['official-artwork']?.front_default ??
    pokemon.sprites.front_default ??
    '';

  return (
    <CardWrapper onClick={onClick}>
      <PokemonImage src={img} alt={pokemon.name} />
      <Name>{pokemon.name}</Name>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  max-width: 160px;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  border-radius: 8px;
  overflow: hidden;
  background: #1f1f1f;
  padding: 8px;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  }
`;

const PokemonImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: contain;
  display: block;
  background: #2a2a2a;
  border-radius: 8px;
`;

const Name = styled.p`
  margin-top: 8px;
  text-align: center;
  color: white;
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 600;
`;
