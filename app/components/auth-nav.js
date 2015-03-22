import Ember from 'ember';
import layout from '../templates/components/auth-nav';

let actions = {
	login: function() {
		this.sendAction('login');
	},
	register: function() {
		this.sendAction('register');
	}
};

export default Ember.Component.extend({
	layout: layout,
	actions: actions 
});
