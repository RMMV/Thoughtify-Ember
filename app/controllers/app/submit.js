import Ember from 'ember';

export default Ember.Controller.extend({
	idea: Ember.Object.create(),
	actions: {
		submitIdea: function(){
			this.store.createRecord('idea', {
				title: this.get('idea.title'),
				body: this.get('idea.body')
			}).save();
		}
	}
});
