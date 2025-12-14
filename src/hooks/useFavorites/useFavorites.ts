import { useEffect, useState } from 'react';
import * as favApi from '../../api/favoritesApi';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    favApi.getFavorites().then((data) => {
      setFavorites(data);
      setLoading(false);
    });
  }, []);

  const toggle = async (name: string) => {
    await favApi.toggleFavorite(name);
    const updated = await favApi.getFavorites();
    setFavorites(updated);
  };

  const isFavorite = (name: string) => favorites.includes(name);

  return {
    favorites,
    isFavorite,
    toggleFavorite: toggle,
    loading,
  };
}
