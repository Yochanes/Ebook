import React from 'react'
import '../../App.css'
import SearchIcon from '../../img/search-icon.png'

function Search() {
	return (
		<form action='#' className='search-book'>
			<img src={SearchIcon} alt='' className='search-book__icon' />
			<input
				type='text'
				className='search-book__input'
				placeholder='Search for books, authors, genres'
			/>
		</form>
	)
}

export default Search
