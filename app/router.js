import EmberRouter from '@ember/routing/router';
import config from 'pokemon/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('pokemons', function () {
    this.route('pokemon', { path: '/pokemon/:pokemon_id' });
    this.route('loading');
  });
  this.route('my-pokemons');
  this.route('loading');
  this.route('not-found', { path: '/*any' });
});
