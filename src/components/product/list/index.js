import { PRODUCTS } from '../../../shared/data/productsData'
import { ProductCard } from '../card'

export function ProductList() {
	PRODUCTS.forEach(product => {
		let card = document.createElement('div')
		card.classList.add('card')
		card.innerHTML = ProductCard(product)

		document.querySelector('.products-container').appendChild(card)
	})
}
