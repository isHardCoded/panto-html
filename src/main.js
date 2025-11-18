import { ProductList } from './components/product/list'
import { HomePage } from './pages/home/index'
import { showToast } from './components/toast/index'

import Aos from 'aos'
import { CategoriesList } from './components/categories/list'

Aos.init()

document.querySelector('#app').innerHTML = `
<div class="wrapper">
  ${HomePage()}
</div>
`
function setActive(activeIndex) {
	CategoriesList().forEach((button, index) => {
		button.classList.toggle('active-filter', index === activeIndex)
	})
}

CategoriesList(setActive).forEach(button =>
	document.querySelector('.products-filter').appendChild(button)
)

window.addToCart = function (name) {
	console.log(`Товар ${name} добавлен в корзину`)
	showToast()
}

ProductList()
