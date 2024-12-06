import React from 'react'

class AddUserForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			surname: "",
			bio: ""
		}
	}

	clearForm() {
		this.setState({
			name: "",
			surname: "",
			bio: ""
		})

		document.querySelector("form#add_user_form").reset();
	}

	render() {
		return(
			<div id="add_user_container">
				<h2>Add User</h2>
				<form id="add_user_form">
					<input type="text" placeholder="Name*" onBlur={(event) => this.setState({ name: event.target.value }) } />
					<input type="text" placeholder="Surname*" onBlur={(event) => this.setState({ surname: event.target.value }) } />
					<textarea placeholder="Bio" onBlur={(event) => this.setState({ bio: event.target.value }) }></textarea>
					<button type="button" onClick={() => { this.props.onAdd({
						name: this.state.name,
						surname: this.state.surname,
						bio: this.state.bio
					}); this.clearForm() } } >
						Add
					</button>
				</form>
			</div>
		)
	}
}

export default AddUserForm;