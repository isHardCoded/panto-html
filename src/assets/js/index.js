let products = [
	{
		id: 1,
		category: 'Chair',
		name: 'Baltsar Chair',
		imageUrl: './public/images/chair-1.png',
		price: 299,
	},
	{
		id: 2,
		category: 'Chair',
		name: 'Sakarias Armchair',
		imageUrl: './public/images/chair-2.png',
		price: 392,
	},
]

let categories = [
	{
		id: 1,
		name: 'Chair',
	},
	{
		id: 2,
		name: 'Beds',
	},
	{
		id: 3,
		name: 'Sofa',
	},
	{
		id: 4,
		name: 'Lamp',
	},
]

function showToast() {
	let toast = document.getElementById('toast')

	toast.classList.add('show')

	setTimeout(() => {
		toast.classList.remove('show')
	}, 2000)
}

function addToCart(name) {
	console.log(`Товар ${name} добавлен в корзину`)
	showToast()
}

function showProducts() {
	products.forEach(product => {
		let card = document.createElement('div')
		card.classList.add('card')

		card.innerHTML = `
    <div class="card-image">
		<img src="${product.imageUrl}" alt="" />
	</div>

	<div class="card-content">
		<h4>${product.category}</h4>
		<h3>${product.name}</h3>
		<div class="card-rating">
			<img src="./public/icons/star.svg" alt="" />
			<img src="./public/icons/star.svg" alt="" />
			<img src="./public/icons/star.svg" alt="" />
			<img src="./public/icons/star.svg" alt="" />
		</div>
		<div class="card-price">
			<p><span>$</span>${product.price}</p>
			<button onclick="addToCart('${product.name}')" class="addToCartBtn">
				<img src="./public/icons/plus.svg" alt="" />
			</button>
		</div>
	</div>
    `

		document.querySelector('.products-container').appendChild(card)
	})
}

const buttons = categories.map((category, index) => {
	let button = document.createElement('button')
	button.classList.add('filter')
	button.textContent = category.name

	if (index === 0) button.classList.add('active-filter')

	button.addEventListener('click', () => setActive(index))
	return button
})

function setActive(activeIndex) {
	buttons.forEach((button, index) => {
		button.classList.toggle('active-filter', index === activeIndex)
	})
}

showProducts()

buttons.forEach(button =>
	document.querySelector('.products-filter').appendChild(button)
)
