import { Header } from '../../components/header'
import { Search } from '../../components/search'

export function HomePage() {
	return `
    <div class="hero">
	    ${Header()}
		<!-- HERO CONTENT -->
		<div class="hero-content">
			<h1 class="hero-title animate__animated animate__fadeInUp">
				Make Your Interior More Minimalistic & Modern
			</h1>
			<h3 class="hero-subtitle" animate__animated animate__fadeInUp">
				Turn your room with panto into lot more minimalist<br />
				and modern with ease and speed
			</h3>
			${Search()}
		</div>
	</div>
    <main class="main">
				<!-- CHOOSING US -->
				<div class="choosing">
					<h2 data-aos="fade-right">
						Why<br />
						Choosing Us
					</h2>
					<div class="choosing-blocks">
						<div data-aos="fade-up" class="choosing-block">
							<h3>Luxury facilities</h3>
							<p>
								The advantage of hiring a workspace with us is that givees you
								comfortable service and all-around facilities.
							</p>
							<a href="#">
								<span>More Info</span>
								<img src="./public/images/orange-arrow.svg" alt="" />
							</a>
						</div>
						<div data-aos="fade-up" class="choosing-block">
							<h3>Luxury facilities</h3>
							<p>
								The advantage of hiring a workspace with us is that givees you
								comfortable service and all-around facilities.
							</p>
							<a href="#">
								<span>More Info</span>
								<img src="./public/images/orange-arrow.svg" alt="" />
							</a>
						</div>
						<div data-aos="fade-up" class="choosing-block">
							<h3>Luxury facilities</h3>
							<p>
								The advantage of hiring a workspace with us is that givees you
								comfortable service and all-around facilities.
							</p>
							<a href="#">
								<span>More Info</span>
								<img src="./public/images/orange-arrow.svg" alt="" />
							</a>
						</div>
					</div>
				</div>

				<!-- PRODUCTS -->
				<div class="products">
					<h2>Best Selling Product</h2>
					<!-- PRODUCTS FILTER -->
					<nav class="products-filter"></nav>
					<!-- PRODUCTS CARDS -->
					<div class="products-container">
						<button class="prev">
							<img src="./public/icons/left-arrow.svg" alt="" />
						</button>

						<button class="next">
							<img src="./public/icons/right-arrow.svg" alt="" />
						</button>
					</div>
					<!-- LINK -->
					<a href="#">
						<span>View All</span>
						<img src="./public/images/orange-arrow.svg" alt="" />
					</a>
				</div>
			</main>
        `
}
