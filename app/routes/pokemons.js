import Route from '@ember/routing/route';
import getData from '../utils/get-data';

export default class PokemonsRoute extends Route {
  queryParams = {
    limit: {
      refreshModel: true,
    },
  };
  async model({ limit,skipModel }) {
    if(skipModel){
      return null;
    }
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    const pokemonsData = await getData(url);
    const pokemons = pokemonsData.results;

    const pokeProfilePromises = pokemons.map(async (pokemon) => {
      const pokemonName = pokemon.name;
      const pokemonData = await getData(pokemon.url);
      const pokemonImg = pokemonData.sprites.front_default;
      const pokemonId = pokemonData.id;
      return { name: pokemonName, image: pokemonImg, id: pokemonId };
    });
    const pokeProfiles = await Promise.all(pokeProfilePromises);
    return pokeProfiles;
  }

}
