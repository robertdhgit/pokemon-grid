// Key for localStorage
const KEY = 'favoritePokemons';

// Simulate delay
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function getFavorites(): Promise<string[]> {
  await delay(200); // simulate network delay
  return JSON.parse(localStorage.getItem(KEY) || '[]');
}

export async function addFavorite(name: string): Promise<void> {
  await delay(200);
  const list = await getFavorites();
  if (!list.includes(name)) {
    localStorage.setItem(KEY, JSON.stringify([...list, name]));
  }
}

export async function removeFavorite(name: string): Promise<void> {
  await delay(200);
  const list = await getFavorites();
  localStorage.setItem(KEY, JSON.stringify(list.filter((n) => n !== name)));
}

export async function toggleFavorite(name: string): Promise<void> {
  const list = await getFavorites();
  if (list.includes(name)) {
    await removeFavorite(name);
  } else {
    await addFavorite(name);
  }
}
