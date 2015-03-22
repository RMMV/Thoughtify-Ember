import Ember from 'ember';

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
		this.transitionToRoute('login');
	},
	register: function() {
		console.log('register was clicked');
	}
};

export default Ember.Controller.extend({
	fallingIdeas: ideas,
	actions: actions
});