import React from 'react'
import '../App.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Search from '../components/Search/Search'

function SearchPage() {
	return (
		<div className='App'>
			<Header />
			<div className='container'>
				<Search />
				<Footer />
			</div>
		</div>
	)
}

export default SearchPage
