import Ember from 'ember';

// cool import
let { $ } = Ember;
let ideas = createIdeas(2);

export default Ember.Controller.extend({
	fallingIdeas: ideas,
	loggingIn: false,
	identificationPlaceholder: Ember.computed('loggingIn', function(){
		let loggingIn = this.get('loggingIn');
		let placeholder  = ! loggingIn ? 'email' : 'username or email';
		return placeholder;
	}),
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
	let self 			= this;
	let loggingIn 		= self.get('loggingIn');
	let identification 	= self.get('identification');
	let password 		= self.get('password');
	let session 		= self.get('session');

	if (loggingIn) {

		session
			.authenticate(
				'simple-auth-authenticator:token',
				{ identification, password }
			)
			.then(() => {
				self.transitionToRoute('app');
			})
			.catch(() => {
				console.log('login failed', arguments);
			});


	} else {
		/* registering */
		
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