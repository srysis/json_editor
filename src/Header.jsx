import React from "react"
import { Link } from "react-router-dom"

class Header extends React.Component {
	render() {
		return(
			<header>
				<h1><Link to="/">JSON editor</Link></h1>
			</header>
		)
	}
}

export default Header;