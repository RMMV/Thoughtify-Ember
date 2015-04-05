export default function() {
	this.transition(
		this.fromRoute('app.ideas'),
		this.toRoute('app.idea'),
		this.use('to-left'),
		this.reverse('to-right')
	);
}