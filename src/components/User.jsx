import React from "react"

import delete_icon from "../trash-can.svg"


class User extends React.Component {
	user = this.props.user;

	render() {
		return (
			<div className="user">
				<div>
					<span>
						{this.user.id}. {this.user.name} {this.user.surname} 
					</span>
					<img src={delete_icon} alt="Delete user" title="Delete user" onClick={() => this.props.onDelete(this.user.id) } /> 
				</div>
				<p>{this.user.bio === "" ? "No information given." : this.user.bio}</p>
			</div>
		)
	}	
}

export default User;