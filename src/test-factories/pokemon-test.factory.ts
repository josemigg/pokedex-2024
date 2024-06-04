import { PokemonGender, PokemonListItem } from '../models';
import { generateRandomNumber, generateRandomString } from '../tests/utils/random-generator';

export const generateRandomPokemonListItem = (partialPokemonData: Partial<PokemonListItem> = {}): PokemonListItem => {
  return {
    name: generateRandomString(),
    imageUrl: '',
    id: 1,
    isFav: false,
    isHidden: true,
    tags: [generateRandomString()],
    price: generateRandomNumber(),
    level: 1,
    gender: PokemonGender.Female,
    ...partialPokemonData,
  };
};
