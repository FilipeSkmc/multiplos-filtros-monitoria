import { CharacterType } from '../types';

export const fetchCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();

  const characters = data.results.map((character: CharacterType) => {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
      species: character.species,
      status: character.status,
      origin: character.origin.name,
      location: character.location.name,
    };
  });
  return characters;
};
