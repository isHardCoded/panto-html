export function ProductCard(product) {
	return `
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
}
