import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class PokemonsController extends Controller {
  @service router;
  queryParams = ['limit'];

  @tracked limit = 18;

  get isBase() {
    return this.router.currentRouteName === 'pokemons.index';
  }
  @action
  scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  @action
  focus(element) {
    element.focus();
  }

  @action
  handleClick() {
    this.limit += 18;
  }
}
