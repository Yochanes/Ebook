import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import Izbrannoe from '../../img/izbrannoe.png'
import Logo from '../../img/logo.png'
import Napominanie from '../../img/napominanie.png'
import Podarok from '../../img/podarok.png'
import Profile from '../../img/profile.png'
import SearchIcon from '../../img/search-icon.png'

function Header() {
	// Создаем состояние для открытия/закрытия меню
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

	// Функция для переключения состоянию меню
	const toggleProfileMenu = () => {
		setIsProfileMenuOpen(!isProfileMenuOpen)
	}

	return (
		<header className='header'>
			<div className='header-left'>
				<a href='/' className='header-logo'>
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
				<a
					href='#'
					className={`link_profile ${isProfileMenuOpen ? 'active' : ''}`}
					onClick={toggleProfileMenu}
				>
					<img src={Profile} alt='' className='link__icon link__icon_profile' />
				</a>
				<div className={`profile-menu ${isProfileMenuOpen ? 'active' : ''}`}>
					<ul className='profile-nav'>
						<li>
							<Link to='/search' className='profile-nav__link'>
								Profile
							</Link>
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
	)
}

export default Header
