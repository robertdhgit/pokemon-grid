import styled from 'styled-components';

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
  padding: 20px 0;
`;
