import React from "react"

import User from "./User"

class Users extends React.Component {
	constructor(props) {
		super(props);

		this.state = {isVisible: false};
	}

	render() {
		if (this.props.users.length > 0) {
			return(
				<>
					<h2>Users</h2>
					<div id="users_info_list">
						{this.props.users.map((user) => <User onDelete={this.props.onDelete} key={user.id} user={user} />)}
					</div>
				</>
			)
		} else {
			return(
				<>
					<h2>Users</h2>
					<h3>List is empty</h3>
				</>
			)
		}
	}
}

export default Users;