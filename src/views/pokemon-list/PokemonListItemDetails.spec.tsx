import { PokemonListItemDetails, PokemonListItemProps } from './PokemonListItemDetails';
import { renderComponent } from '../../tests/utils/component-renderer';
import { PokemonListItem } from '../../models';
import { screen, waitFor } from '@testing-library/react';
import { generateRandomNumber, generateRandomString } from '../../tests/utils/random-generator';
import userEvent from '@testing-library/user-event';
import { UserContext, UserContextModel } from '../../contexts/UserContextProvider';
import { generateRandomPokemonListItem } from '../../test-factories/pokemon-test.factory';

interface PokemonListItemPropsPartial extends Omit<Partial<PokemonListItemProps>, 'pokemon'> {
  pokemon?: Partial<PokemonListItem>;
}

describe('PokemonListItemDetails', () => {
  it('Should render the pokemon', () => {
    const name = generateRandomString();
    const randomTags = [generateRandomString(), generateRandomString()];
    const randomPrice = generateRandomNumber();
    renderPokemonListItemDetails({
      pokemon: {
        name,
        tags: randomTags,
        price: randomPrice,
      },
    });

    const nameElement = screen.getByText(name);
    const tagsElement = screen.getByText(randomTags.join(', '));
    const priceElement = screen.getByText(`${randomPrice}€`);

    expect(nameElement).toBeInTheDocument();
    expect(tagsElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  it('Should call onFavPokemonClick when the user is signed in', async () => {
    const onFavPokemonClick = vi.fn();
    renderPokemonListItemDetails({ onFavPokemonClick }, { isSignedIn: true });

    const favElement = screen.getByLabelText('fav pokemon');

    userEvent.click(favElement);

    await waitFor(() => {
      expect(onFavPokemonClick).toBeCalled();
    });
    // expect(favElement).toBeInTheDocument();
  });

  it('Should not call onFavPokemonClick when the user is not signed in', async () => {
    const onFavPokemonClick = vi.fn();
    renderPokemonListItemDetails({ onFavPokemonClick }, { isSignedIn: false });

    const favElement = screen.getByLabelText('fav pokemon');

    userEvent.click(favElement);

    await waitFor(() => {
      expect(onFavPokemonClick).not.toBeCalled();
    });
    // expect(favElement).toBeInTheDocument();
  });

  it('The fav button should be red if the pokemon is fav', async () => {
    renderPokemonListItemDetails({ pokemon: { isFav: true } }, { isSignedIn: false });

    const favElement = screen.getByLabelText('fav pokemon');

    expect(favElement.style.color).toBe('red');
    // expect(favElement).toBeInTheDocument();
  });

  const renderPokemonListItemDetails = (
    partialProps: PokemonListItemPropsPartial = {},
    partialContextValue: Partial<UserContextModel> = {},
  ) => {
    const { pokemon = {}, ...rest } = partialProps;
    renderComponent(
      <UserContext.Provider value={{ isSignedIn: false, signIn: vi.fn(), ...partialContextValue }}>
        <PokemonListItemDetails
          pokemon={generateRandomPokemonListItem(pokemon)}
          onHidePokemonClick={vi.fn()}
          onFavPokemonClick={vi.fn()}
          {...rest}
        />
      </UserContext.Provider>,
    );
  };
});
