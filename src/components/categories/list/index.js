import { CATEGORIES } from '../../../shared/data/categoriesData'

export function CategoriesList(setActive) {
	return CATEGORIES.map((category, index) => {
		let button = document.createElement('button')
		button.classList.add('filter')
		button.textContent = category.name

		if (index === 0) button.classList.add('active-filter')

		button.addEventListener('click', () => setActive(index))
		return button
	})
}
