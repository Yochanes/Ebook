import React from 'react'
import '../../App.css'
import Book1 from '../../img/book1.png'
import Book2 from '../../img/book2.png'
import Book3 from '../../img/book3.png'
import Book4 from '../../img/book4.png'

function Books() {
	return (
		<>
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
		</>
	)
}

export default Books
