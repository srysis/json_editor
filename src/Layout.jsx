import React from "react"
import { Outlet } from "react-router-dom"

import Header from "./Header.jsx"

class Layout extends React.Component {
	render() {
		return(
			<>
				<Header />
				<main>
					<Outlet />
				</main>
			</>
		)
	}
}

export default Layout;