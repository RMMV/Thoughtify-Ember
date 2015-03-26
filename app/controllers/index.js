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
	let hgroup = $('.sky > hgroup');
	$.Velocity.animate(hgroup, {top: '0'}, {duration: 1000});

	// fade the login form in from the background
	let form = $('.login-form');
	form.css('visibility', 'visible').hide().fadeIn('slow');
}

function register() {

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