import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(){
		let session = this.get('session');
		if (session.isAuthenticated) {
			this.transitionTo('ideas');
		}
	}
});
