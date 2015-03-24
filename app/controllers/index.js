import Ember from 'ember';
import VelocityMixin from 'ember-velocity-mixin/main';

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

let ideas = createIdeas(2);

let actions = {
	createIdea: function() {
		ideas.pushObject({
			delay: 1500,
			duration: inRange(2000, 3000),
			left: inRange(0, 80) + 'vw',
			rotation: inRange(-45, 45)
		});
	},
	login: function() {
		let hgroup = Ember.$('.sky > hgroup');
		this.animate(hgroup, {top: '0'}, {duration: 1000});

		// fade the login form in from the background
		let form = Ember.$('.login-form');
		form.css('visibility', 'visible').hide().fadeIn('slow');
	},
	register: function() {
		
	}
};

export default Ember.Controller.extend(VelocityMixin, {
	fallingIdeas: ideas,
	actions: actions
});