export default function() {
	this.transition(
		this.fromRoute('index'),
		this.toRoute('login'),
		this.use('toLeft'),
		this.reverse('toRight')
	)
}