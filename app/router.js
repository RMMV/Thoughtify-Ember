import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('app', function() {
    this.resource('ideas', {path: '/'});
    this.resource('profile');
    this.route('logout');
    this.route('submit');
  });
});

export default Router;
