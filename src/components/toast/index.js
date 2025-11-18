export function showToast() {
	let toast = document.getElementById('toast')

	toast.classList.add('show')

	setTimeout(() => {
		toast.classList.remove('show')
	}, 2000)
}
