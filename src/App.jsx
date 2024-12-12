import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from "./Layout"

import Home from "./pages/home.jsx"
import FileProcessor from "./pages/file_processor.jsx"
import CreateEmptyFile from "./pages/create_empty_file.jsx"

import "./style/style.scss"
import "./style/style-phone.scss"

class App extends React.Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="/upload" element={<FileProcessor /> } />
						<Route path="/create" element={<CreateEmptyFile /> } />
					</Route>
				</Routes>
			</Router>
		)
	}
}

export default App;
