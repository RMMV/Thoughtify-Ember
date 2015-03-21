import Ember from 'ember';

export default Ember.Controller.extend({
	fallingIdeas: (function(){
		let arr = [];
		for (let i = 0; i < 20; i++) {
			arr.push({
				delay: Math.round(Math.random()*10000),
				duration: Math.round(Math.random()*3000),
				left: Math.round(Math.random()*80) + 'vw',
				rotate: Math.round((Math.random() - 0.5)*45)
			});
		}
		return arr;
	})(),
});