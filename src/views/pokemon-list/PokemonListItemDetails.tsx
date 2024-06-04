import { Link } from 'react-router-dom';
import { MouseEvent, useContext } from 'react';
import { UserContext } from '../../contexts/UserContextProvider';
import { PokemonListItem } from '../../models';
import './pokemon-list.css';

export interface PokemonListItemProps {
  pokemon: PokemonListItem;
  onFavPokemonClick: (pokemonId: number) => void;
  onHidePokemonClick: (pokemonId: number) => void;
}

export const PokemonListItemDetails = (props: PokemonListItemProps) => {
  const { isSignedIn } = useContext(UserContext);

  const { pokemon, onFavPokemonClick, onHidePokemonClick } = props;
  // Necesitamos saber si el usuario ha hecho click alguna vez en algún pokemon
  // Podríamos ver si hay algún pokemon marcado como fav

  const handleFavClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (!isSignedIn) {
      console.log('logeate bro');
      return;
    }
    onFavPokemonClick(pokemon.id);
  };

  const handleHideClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (!isSignedIn) {
      alert('logeate bro');
      return;
    }
    onHidePokemonClick(pokemon.id);
  };

  return (
    <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`}>
      <div className="pokemon">
        <img src={pokemon.imageUrl} />
        <p>{pokemon.name}</p>
        <p>{pokemon.tags.join(', ')}</p>
        <strong>{pokemon.price}€</strong>
        <p>{pokemon.gender}</p>
        <i
          className="fa fa-heart"
          aria-label="fav pokemon"
          onClick={handleFavClick}
          style={{ color: pokemon.isFav ? 'red' : 'black', cursor: 'pointer' }}
          role="button"
        />{' '}
        <i
          className="fa fa-bomb"
          onClick={handleHideClick}
          style={{ color: pokemon.isHidden ? 'red' : 'black', cursor: 'pointer' }}
          role="button"
        />
      </div>
    </Link>
  );
};
