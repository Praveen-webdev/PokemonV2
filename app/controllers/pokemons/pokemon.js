import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class PokemonsPokemonController extends Controller {
  @service collection;
  queryParams = ['isCaught'];
  @tracked isCaught = false;

  @action
  handleToggle() {
    if (!this.isCaught) {
      this.collection.pokemons.pushObject({
        id: this.model.id,
        name: this.model.name,
        image: this.model.image,
      });
    } else {
      this.collection.delete(this.model.id);
    }
    console.log(this.collection.pokemons);
    this.isCaught = !this.isCaught;
  }
}
