import Ember from 'ember';
import layout from '../templates/components/falling-idea';

let events = {
	didInsertElement: function() {

		let $ = Ember.$;

		let callback = this.get('afterFall');

		let eventualStyles = {
			top: '100vh',
			rotateZ: this.get('rotation'),
		};

		let options = {
			duration: this.get('duration'),
			delay: this.get('delay'),
		};

		// update the position of this element
		$(this.element).css('left', this.get('left'));

		$.Velocity
			.animate(this.element, eventualStyles, options)
			.then(callback);
	}
};

export default Ember.Component.extend(
	events, {
		layout: layout,
		classNames: ['falling-idea'],
		left: 0,
		delay: 0,
		duration: 4999,
		rotation: 30,
		afterFall: function(){}
	});