import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'https://localhost:1337',
	headers: function(){
		return {'x-access-token': this.get('session.token')};
	}.property('session.token')
});
