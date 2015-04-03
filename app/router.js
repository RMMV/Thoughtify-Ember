import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('app', function() {
    this.route('logout');
    this.resource('ideas');
    this.resource('profile');
  });
});

export default Router;
