import React from 'react'
import '../App.css'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Books from '../components/Home/Books'
import Search from '../components/Search/Search'

function HomePage() {
	return (
		<div className='App'>
			<Header />
			<div className='container'>
				<Banner />
				<Search />
				<Books />
				<Footer />
			</div>
		</div>
	)
}

export default HomePage
