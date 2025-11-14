export function Header() {
	return `<header class="header animate__animated animate__fadeInDown">
		    <img src="/public/images/logo.svg" alt="" />
			<nav class="header_nav">
				<a href="#"class="header_link">Furniture</a>
				<a href="#" class="header_link">Shop</a>
				<a href="#" class="header_link">About Us</a>
				<a href="#" class="header_link">Contact</a>
			</nav>
			<!-- CART BUTTON -->
			<button class="header_button">
				<img src="./public/icons/bag.svg" alt="" />
				<span class="cart_badge">0</span>
			</button>
		</header>`
}
