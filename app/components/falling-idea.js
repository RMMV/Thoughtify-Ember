import Ember from 'ember';
import layout from '../templates/components/falling-idea';

// cool import
let { $ } = Ember;

export default Ember.Component.extend({
	layout: layout,
	classNames: ['falling-idea'],
	left: 0,
	delay: 0,
	duration: 1000,
	rotation: 45,
	didInsertElement: didInsertElement
});

function didInsertElement() {

	// console.log('this bit of code actually ran');

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
	let left = self.get('left');
	let $element = $(self.element);

	// a position on the horizontal scale
	$element.css('left', left);

	$.Velocity.animate($element, eventualStyles, options)
		.then(() => {
			self.sendAction('after-fall');
		});
}