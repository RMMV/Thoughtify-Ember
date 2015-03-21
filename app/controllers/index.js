import Ember from 'ember';

function choose() {
	let index = Math.floor(Math.random()*arguments.length);
	return arguments[index];
}

function inRange(max, min) {
	return Math.round((Math.random() * (max - min)) + min);
}

export default Ember.Controller.extend({
	fallingIdeas: (function(){
		let arr = [];
		for (let i = 0; i < 50; i++) {
			arr.pushObject({
				delay: i * 1500,
				duration: inRange(2000,3000),
				left: inRange(0, 80) + 'vw',
				rotation: inRange(-45, 45)
			});
		}
		return arr;
	})(),
});