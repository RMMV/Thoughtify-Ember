import Ember from 'ember';

export default Ember.Component.extend({
	attributeBindings: ['data-component'],
	'data-component': 'progress-bar'
});
