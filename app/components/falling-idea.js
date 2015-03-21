import Ember from 'ember';
import layout from '../templates/components/falling-idea';

let events = {
	didInsertElement: function(){

		let eventualStyles = {
			top: '100vh',
			rotateZ: this.get('rotate'),
		};

		let options = {
			duration: this.get('duration'),
			delay: this.get('delay'),
		}

		Ember
			.$(this.element)
			.css('left', this.get('left'))
			.velocity(eventualStyles, options);
	}
}

export default Ember.Component.extend(
	events, {
	layout: layout,
	classNames: ['falling-idea'],
	left: 0,
	delay: 0,
	duration: 4999, 
	rotate: 30
});
