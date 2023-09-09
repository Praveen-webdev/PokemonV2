import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import { computed } from '@ember/object';
export default class CollectionService extends Service {
  pokemons = A([]);
  delete(id) {
    let temp = this.pokemons.find((pokemon) => pokemon.id === id);
    if (temp) {
      this.pokemons.removeObject(temp);
    }
  }
}
