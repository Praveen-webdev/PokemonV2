import Route from '@ember/routing/route';
import getData from '../../utils/get-data';

export default class PokemonsPokemonRoute extends Route {
  queryParams = {
    isCaught: {
      replace: true,
    },
  };

  async model({ pokemon_id }) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}`;
    const pokemonData = await getData(url);
    const name = pokemonData.name.charAt(0).toUpperCase().concat(pokemonData.name.slice(1));
    const image = pokemonData.sprites.front_default;
    const weight = pokemonData.weight;
    const experience = pokemonData.base_experience;
    const abilities = pokemonData.abilities.map(
      (ability) => ability.ability.name
    );
    const moves = pokemonData.moves.map((move) => move.move.name);
    const types = pokemonData.types.map((type) => type.type.name);

    return {
      id: pokemon_id,
      name,
      image,
      weight,
      experience,
      abilities,
      moves,
      types,
    };
  }
}
