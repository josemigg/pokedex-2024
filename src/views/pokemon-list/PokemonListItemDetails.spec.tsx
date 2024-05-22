import { PokemonListItemDetails, PokemonListItemProps } from './PokemonListItemDetails';
import { renderComponent } from '../../tests/utils/component-renderer';
import { PokemonGender, PokemonListItem } from '../../models';
import { screen } from '@testing-library/react';
import { generateRandomNumber, generateRandomString } from '../../tests/utils/random-generator';

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

  it('Should call onFavPokemonClick', () => {
    const onFavPokemonClick = vi.fn();
    renderPokemonListItemDetails({ onFavPokemonClick });

    const nameElement = screen.getByText(name);
    const tagsElement = screen.getByText(randomTags.join(', '));
    const priceElement = screen.getByText(`${randomPrice}€`);

    expect(nameElement).toBeInTheDocument();
    expect(tagsElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  const renderPokemonListItemDetails = (partialProps: PokemonListItemPropsPartial = {}) => {
    const { pokemon = {}, ...rest } = partialProps;
    renderComponent(
      <PokemonListItemDetails
        pokemon={{
          name: generateRandomString(),
          imageUrl: '',
          id: 1,
          isFav: false,
          isHidden: true,
          tags: [generateRandomString()],
          price: generateRandomNumber(),
          level: 1,
          gender: PokemonGender.Female,
          ...pokemon,
        }}
        onHidePokemonClick={vi.fn()}
        onFavPokemonClick={vi.fn()}
        {...rest}
      />,
    );
  };
});
