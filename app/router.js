import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('app', function() {
  	this.resource('app.ideas', {path: '/'});
    this.resource('app.idea', {path: '/:idea_id'});
    this.resource('profile');
    this.route('logout');
    this.route('submit');
  });
});

export default Router;
