import { ProductList } from './components/product/list'
import { HomePage } from './pages/home/index'
import { showToast } from './components/toast/index'
import { CategoriesList } from './components/categories/list'

import Aos from 'aos'

Aos.init()

document.querySelector('#app').innerHTML = `
<div class="wrapper">
  ${HomePage()}
</div>
`

const buttons = CategoriesList(setActive);
const container = document.querySelector('.products-filter');
buttons.forEach(button => container.appendChild(button));

function setActive(activeIndex) {
    const buttonsInDom = container.querySelectorAll('button.filter');
    buttonsInDom.forEach((button, index) => {
        button.classList.toggle('active-filter', index === activeIndex);
    });
}

window.addToCart = function (name) {
	console.log(`Товар ${name} добавлен в корзину`)
	showToast()
}

ProductList()
