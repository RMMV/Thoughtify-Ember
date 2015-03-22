import Ember from 'ember';
import layout from '../templates/components/falling-idea';

// this must be used because Velocity relies on a global 
// Promise object. This mixin removes that requirement.
import VelocityMixin from 'ember-velocity-mixin/main';

let events = {

	didInsertElement: function() {

		let self = this;

		let eventualStyles = {
			top: '100vh',
			rotateZ: self.get('rotation'),
		};

		let options = {
			duration: self.get('duration'),
			delay: self.get('delay'),
		};

		// update the position of this element
		self.css('left', self.get('left'));

		self.animate(eventualStyles, options)
			.then(function() {
				self.sendAction('after-fall');
			});
	}
};

export default Ember.Component.extend(
	VelocityMixin, events, {
		layout: layout,
		classNames: ['falling-idea'],
		left: 0,
		delay: 0,
		duration: 4999,
		rotation: 30,
	});