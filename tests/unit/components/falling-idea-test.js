import {
	moduleForComponent,
	test
}
from 'ember-qunit';

moduleForComponent('falling-idea', {
	// specify the other units that are required for this test
	// needs: ['component:foo', 'helper:bar']
	beforeEach() {

		// $.Velocity can't be trusted, so we stub it out
		$.Velocity.animate = sinon.stub();
		$.Velocity.animate.returns(Ember.RSVP.resolve());

	}
});

test('it renders', function(assert) {
	assert.expect(2);

	// creates the component instance
	var component = this.subject();
	assert.equal(component._state, 'preRender');

	// renders the component to the page
	this.render();
	assert.equal(component._state, 'inDOM');
});

test('its DOM element has the class \'falling-idea\'', function(assert) {
	let component = this.subject();
	
	// render the component
	this.render();

	// check if the component has a falling-idea class 
	assert.ok(component.element.classList.contains('falling-idea'));

});

test('it should fall a predetermined time after it\'s been rendered', function(assert){
	let component = this.subject();

	// set the component defaults
	Ember.run(function(){
		component.set('left', 10);
		component.set('delay', 20);
		component.set('duration', 30);
		component.set('rotation', 40);
	});

	this.render();

	// check the arguments of component.animate
	let args = $.Velocity.animate.getCall(0).args;

	// grab styles and options
	let styles = args[1];
	let options = args[2];

	// verify the options forward the duration and the delay
	assert.equal(options.duration, 30);
	assert.equal(options.delay, 20);

	// verify the styles get persisted
	assert.equal(styles.rotateZ, 40);

});

test('it should trigger an \'after-fall\' action after the animation\'s done', function(assert){
	let component = this.subject();

	// we're going to spy on the sendAction method
	sinon.spy(component, 'sendAction');

	// render the component
	this.render();

	// check if the call was made
	assert.ok(component.sendAction.getCall(0).calledWith('after-fall'));

});

test('it can set the element\'s horizontal position', function(assert) {
	let component = this.subject();

	Ember.run(function(){
		component.set('left', 10);
	});

	// render component
	this.render();
	
	assert.equal(component.element.style.left, '10px');

});