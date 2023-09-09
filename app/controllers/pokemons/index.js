import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';


export default class PokemonsIndexController extends Controller {
  queryParams = ['search'];
  @tracked search = '';

  get filteredPokemons() {
    if (this.search) {
      return this.model.filter((pokemon) => {
        const pokeName = pokemon.name.toLowerCase();
        const searchName = this.search.toLowerCase();
        return pokeName.startsWith(searchName);
      });
    } else {
      return this.model;
    }
  }
}
