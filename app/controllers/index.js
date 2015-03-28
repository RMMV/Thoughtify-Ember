import Ember from 'ember';

// cool import
let { $ } = Ember;
let ideas = createIdeas(2);

export default Ember.Controller.extend({
	fallingIdeas: ideas,
	loggingIn: false,
	actions: { 
		createIdea: createIdea, 
		login: login, 
		register: register,
		loginOrRegister: loginOrRegister
	}
});

/**
	ACTIONS BELOW
**/

function login() {
	this.set('loggingIn', true);
	clickTransition();
}

function register() {
	this.set('loggingIn', false);
	clickTransition();
}

function loginOrRegister() {
	console.log(this.get('username'), this.get('password'));

	let loggingIn = this.get('loggingIn');

	if (loggingIn) {

	}

}

function createIdea() {

	if (ideas.get('length') > 100) {
		ideas.shiftObject();
	}

	ideas.pushObject({
		delay: 3500,
		duration: inRange(3000, 5000),
		left: inRange(0, 80) + 'vw',
		rotation: inRange(-45, 45)
	});
}

/**
	HELPER METHODS BELOW
**/

function clickTransition(){

	let hgroup 	= $('.sky > hgroup');
	let form 	= $('.forms');

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
			delay: i * 6000,
			duration: inRange(4000, 6000),
			left: inRange(0, 80) + 'vw',
			rotation: inRange(-45, 45)
		});
	}
	return arr;
}