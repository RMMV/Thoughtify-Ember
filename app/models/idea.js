import DS from 'ember-data';

var Idea = DS.Model.extend({
	body: DS.attr('string'),
	title: DS.attr('string'),
	updatedAt: DS.attr('date'),
	image: DS.attr('string', { defaultValue: "http://placehold.it/400x500"})
});

export default Idea;