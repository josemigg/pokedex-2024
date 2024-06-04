import { PokemonListActionTypes } from './pokemon-list.models';
import { pokemonListReducer, INITIAL_STATE, DEFAULT_FILTERS } from './pokemonListReducer';
import { generateRandomPokemonListItem } from '../../test-factories/pokemon-test.factory';
import { generateRandomString } from '../../tests/utils/random-generator';

describe('pokemonListReducer', () => {
  it('Should change the limit when ChangeLimit action', () => {
    const newState = pokemonListReducer(INITIAL_STATE, { type: PokemonListActionTypes.ChangeLimit, payload: 1 });

    expect(newState).toEqual({ ...INITIAL_STATE, limit: 1 });
  });

  it('Should return an array of unique available tags when no tags are repeated between pokemons', () => {
    const tag1 = generateRandomString();
    const tag2 = generateRandomString();
    const pokemons = [generateRandomPokemonListItem({ tags: [tag1] }), generateRandomPokemonListItem({ tags: [tag2] })];
    const newState = pokemonListReducer(INITIAL_STATE, { type: PokemonListActionTypes.Receive, payload: pokemons });

    expect(newState.tagsAvailable).toEqual([tag1, tag2]);
  });

  it('Should return an array of unique available tags when tags are repeated between pokemons', () => {
    const tag1 = generateRandomString();
    const pokemons = [generateRandomPokemonListItem({ tags: [tag1] }), generateRandomPokemonListItem({ tags: [tag1] })];
    const newState = pokemonListReducer(INITIAL_STATE, { type: PokemonListActionTypes.Receive, payload: pokemons });

    expect(newState.tagsAvailable).toEqual([tag1]);
  });
});
