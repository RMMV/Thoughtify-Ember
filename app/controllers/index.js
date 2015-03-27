import Ember from 'ember';

// cool import
let { $ } = Ember;
let ideas = createIdeas(2);

export default Ember.Controller.extend({
	fallingIdeas: ideas,
	actions: { 
		createIdea: createIdea, 
		login: login, 
		register: register 
	}
});

/**
	ACTIONS BELOW
**/

function login() {
	clickTransition();
}

function register() {
	clickTransition();
}

function createIdea() {
	ideas.pushObject({
		delay: 1500,
		duration: inRange(2000, 3000),
		left: inRange(0, 80) + 'vw',
		rotation: inRange(-45, 45)
	});
}

/**
	HELPER METHODS BELOW
**/

function clickTransition(){

	let hgroup 	= $('.sky > hgroup');
	let form 	= $('.login-form');

	// the form and hgroup are positioned fixed
	// this works regardless of if the items are styled display:none
	let offset = ($(window).height() - form.outerHeight() - hgroup.outerHeight())/2;

	let style = { 
		top: offset + 'px',
		opacity: offset < 50 ? 0 : 1
	};

	let options = {duration: 1000};

	$.Velocity
		.animate(hgroup, style, options)
		.then(() => { 
			form.css('visibility', 'visible').hide().fadeIn(1000); 
			clickTransition = () => {};
		});
}

function inRange(max, min) {
	return Math.round((Math.random() * (max - min)) + min);
}

function createIdeas(count) {
	let arr = [];
	for (let i = 0; i < count; i++) {
		arr.pushObject({
			delay: i * 1500,
			duration: inRange(2000, 4000),
			left: inRange(0, 80) + 'vw',
			rotation: inRange(-45, 45)
		});
	}
	return arr;
}