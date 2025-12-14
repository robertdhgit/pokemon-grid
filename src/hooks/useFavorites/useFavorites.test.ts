import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, expect, vi, beforeEach, test } from 'vitest';
import { useFavorites } from './useFavorites';
import * as favApi from '../../api/favoritesApi';

vi.mock('../api/favoritesApi');

describe('useFavorites', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test('loads favorites on mount', async () => {
    vi.spyOn(favApi, 'getFavorites').mockResolvedValue(['pikachu']);

    const { result } = renderHook(() => useFavorites());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.favorites).toEqual(['pikachu']);
    expect(result.current.isFavorite('pikachu')).toBe(true);
  });

  test('toggles favorite correctly', async () => {
    vi.spyOn(favApi, 'getFavorites').mockResolvedValueOnce([]);

    const toggleSpy = vi.spyOn(favApi, 'toggleFavorite').mockResolvedValue();

    const getSpy = vi.spyOn(favApi, 'getFavorites').mockResolvedValueOnce(['bulbasaur']);

    const { result } = renderHook(() => useFavorites());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    await act(async () => {
      await result.current.toggleFavorite('bulbasaur');
    });

    expect(toggleSpy).toHaveBeenCalledWith('bulbasaur');
    expect(getSpy).toHaveBeenCalledTimes(2);
    expect(result.current.favorites).toEqual(['bulbasaur']);
    expect(result.current.isFavorite('bulbasaur')).toBe(true);
  });
});
