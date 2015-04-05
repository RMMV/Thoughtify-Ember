import Ember from 'ember';

export default Ember.Component.extend({
	attributeBindings: ['data-component'],
	'data-component': 'idea-card',
	progress: Ember.computed(function(){
		return Math.floor(Math.random()*100) + '%';
	})
});
