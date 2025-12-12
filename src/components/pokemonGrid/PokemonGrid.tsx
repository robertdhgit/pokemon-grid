import styled from 'styled-components';

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
  padding: 20px 0;
  width: 100%;

  justify-content: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;
