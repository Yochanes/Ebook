import React from 'react'
import '../../App'
import FbIcon from '../../img/fb-icon.png'
import InstIcon from '../../img/inst-icon.png'
import TwIcon from '../../img/tw-icon.png'

function Footer() {
	return (
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
			<p className='footer-copyright'>© 2022 Readly. All rights reserved.</p>
		</footer>
	)
}

export default Footer
