import './App.css'
import Book1 from './img/book1.png'
import Book2 from './img/book2.png'
import Book3 from './img/book3.png'
import Book4 from './img/book4.png'
import FbIcon from './img/fb-icon.png'
import InstIcon from './img/inst-icon.png'
import Izbrannoe from './img/izbrannoe.png'
import Logo from './img/logo.png'
import Napominanie from './img/napominanie.png'
import Podarok from './img/podarok.png'
import Profile from './img/profile.png'
import SearchIcon from './img/search-icon.png'
import TwIcon from './img/tw-icon.png'

function App() {
	return (
		<div classNameName='App'>
			<header className='header'>
				<div className='header-left'>
					<a href='#' className='header-logo'>
						<img src={Logo} alt='Logo' className='header-logo__img' />
					</a>
					<form action='#' className='search-form'>
						<img src={SearchIcon} alt='' className='search-form__icon' />
						<input
							type='text'
							className='search-form__input'
							placeholder='Search'
						/>
					</form>
				</div>
				<div className='links'>
					<a href='#' className='link'>
						<img src={Podarok} alt='' className='link__icon' />
					</a>
					<a href='#' className='link'>
						<img src={Izbrannoe} alt='' className='link__icon' />
					</a>
					<a href='#' className='link'>
						<img src={Napominanie} alt='' className='link__icon' />
					</a>
					<a href='#' className='link_profile'>
						<img
							src={Profile}
							alt=''
							className='link__icon link__icon_profile'
						/>
					</a>
					<div className='profile-menu'>
						<ul className='profile-nav'>
							<li>
								<a href='#' className='profile-nav__link'>
									Profile
								</a>
							</li>
							<li>
								<a href='#' className='profile-nav__link'>
									Settings
								</a>
							</li>
							<li>
								<a href='#' className='profile-nav__link'>
									Payment
								</a>
							</li>
							<li>
								<a href='#' className='profile-nav__link'>
									Logout
								</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
			<div className='container'>
				<div className='banner'>
					<h1 className='banner-title'>Explore over 5,000 titles</h1>
					<p className='banner-text'>
						Unlimited access to top magazines and premium stories. First month
						FREE
					</p>
					<a href='#' className='banner-button'>
						Start Free Trial
					</a>
				</div>
				<form action='#' className='search-book'>
					<img src={SearchIcon} alt='' className='search-book__icon' />
					<input
						type='text'
						className='search-book__input'
						placeholder='Search for books, authors, genres'
					/>
				</form>
				<section className='recommended'>
					<h2 className='section-title'>Recommended for you</h2>
					<div className='card-container'>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book1} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book2} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book3} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book4} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
					</div>
				</section>
				<section className='newarrivals'>
					<h2 className='section-title'>New Arrivals</h2>
					<div className='card-container'>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book1} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book2} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book3} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book4} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
					</div>
				</section>
				<section className='trending'>
					<h2 className='section-title'>Trending Now</h2>
					<div className='card-container'>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book1} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book2} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book3} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book4} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
					</div>
				</section>
				<section className='favorite'>
					<h2 className='section-title'>From your favorite authors</h2>
					<div className='card-container'>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book1} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book2} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book3} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
						<div className='card-book'>
							<a href='#' className='card-link'>
								<img src={Book4} alt='' className='card-book__img' />
							</a>
							<h4 className='card-title'>The Silent Patient</h4>
							<p className='card-author'>Alex Michaelides</p>
						</div>
					</div>
				</section>
				<footer className='footer'>
					<ul className='footer-menu'>
						<li>
							<a href='#' className='footer-menu__link'>
								About us
							</a>
						</li>
						<li>
							<a href='#' className='footer-menu__link'>
								Contact
							</a>
						</li>
						<li>
							<a href='#' className='footer-menu__link'>
								Sitemap
							</a>
						</li>
					</ul>
					<div className='footer-social'>
						<a href='#' className='footer-social__link'>
							<img src={FbIcon} alt='' />
						</a>
						<a href='#' className='footer-social__link'>
							<img src={TwIcon} alt='' />
						</a>
						<a href='#' className='footer-social__link'>
							<img src={InstIcon} alt='' />
						</a>
					</div>
					<p className='footer-copyright'>
						© 2022 Readly. All rights reserved.
					</p>
				</footer>
			</div>
		</div>
	)
}

export default App
