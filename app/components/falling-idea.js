import Ember from 'ember';
import layout from '../templates/components/falling-idea';

export default Ember.Component.extend({
	layout: layout,
	classNames: ['falling-idea'],
	classNameBindings: ['falling'],
	falling: false,
	actions: {
		toggleFalling: function(){
			this.set('falling', !this.get('falling'));
		}
	}
});
