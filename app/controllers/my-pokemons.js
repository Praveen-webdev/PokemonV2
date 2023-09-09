import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class MyPokemonsController extends Controller {
  @service collection;

  @action
  handleRelease(id){
    console.log("clicked");
    this.collection.delete(id);
  }
}
