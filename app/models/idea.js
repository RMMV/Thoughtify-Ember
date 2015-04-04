import DS from 'ember-data';

var Idea = DS.Model.extend({
	body: DS.attr('string'),
	upvotes: DS.attr('number'),
	downvotes: DS.attr('number'),
	title: DS.attr('string'),
	image: DS.attr('string', { defaultValue: "http://placehold.it/400x500"})
});

export default Idea;