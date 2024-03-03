import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import SearchPage from './page/SearchPage'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='search' element={<SearchPage />} />
			</Routes>
		</Router>
	)
}

export default App
