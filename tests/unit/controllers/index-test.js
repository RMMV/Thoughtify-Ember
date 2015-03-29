import {
	moduleFor,
	test
}
from 'ember-qunit';

moduleFor('controller:index', 'Unit - IndexController', {
	// Specify the other units that are required for this test.
	// needs: ['controller:foo']
	beforeEach() {
		// stub session
		let controller = this.subject();
		
		let authenticate = sinon.stub();
		authenticate.returns(Ember.RSVP.resolve());

		Ember.run(function(){
			controller.set('session', {
				authenticate: authenticate
			});
		});
	}
});

// Replace this with your real tests.
test('it exists', function(assert) {
	let controller = this.subject();
	assert.ok(controller);
});

test('it should be initialized with at least two ideas', function(assert) {
	let controller = this.subject();
	assert.ok(controller.get('fallingIdeas.length') > 1);
});

test('it should create a new idea when the createIdea action is triggered', function(assert) {
	let controller = this.subject();

	let length = controller.get('fallingIdeas.length');
	controller.send('createIdea');

	let newLength = controller.get('fallingIdeas.length');
	assert.equal(length + 1, newLength);
});

test('it can redirect the user to the application after successful login', function(assert) {

	let controller = this.subject();

	// use a stub because spy delegates to the underlying implementation
	sinon.stub(controller, 'transitionToRoute');

	Ember.run(function(){
		controller.set('loggingIn', true);
	});

	// send the login action
	controller.send('loginOrRegister');

	Ember.run.later(function(){
		assert.ok(controller.transitionToRoute.getCall(0).calledWith('app'));
	});

});

test('it should transition to the register route when the register action is clicked', function(assert){
	let controller = this.subject();
	
	// spy on the transitionToRoute method
	sinon.spy(controller, 'transitionToRoute');

	// send the register action
	controller.send('register');

	// we went to the register route
	assert.ok(controller.transitionToRoute.calledWith('register'));
});