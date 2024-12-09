import React from 'react'

import Input from "./InputElement"

class AddUserForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			surname: "",
			bio: "",
			cannotBeAdded: false
		}

		this.onInputBlurHandler = this.onInputBlurHandler.bind(this);
		this.onInputClickHandler = this.onInputClickHandler.bind(this);

		this.onButtonClickHandler = this.onButtonClickHandler.bind(this);
	}

	clearForm() {
		this.setState({
			name: "",
			surname: "",
			bio: ""
		})

		document.querySelector("form#add_user_form").reset();
	}

	onInputBlurHandler(event) {
		const state_field = event.target.className;

		switch (state_field) {
			case "name":
				this.setState( { name: event.target.value } );
				break;
			case "surname":
				this.setState( { surname: event.target.value } );
				break;
			default:
				console.error("Unexpected error.");
				break;
		}
	}

	onInputClickHandler(event) {
		this.setState( {cannotBeAdded: false} );

		//remove "field added successfully" tooltip, if it's still visible
		if (document.querySelector("p.success"))
			document.querySelector("p.success").remove();
	}

	onButtonClickHandler(event) {
		if (this.state.name === "" || this.state.surname === "") {
			this.setState( {cannotBeAdded: true} );

			//remove "field added successfully" tooltip, if it's still visible
			if (document.querySelector("p.success"))
				document.querySelector("p.success").remove();

			return;
		}

		this.props.onAdd({
			name: this.state.name,
			surname: this.state.surname,
			bio: this.state.bio
		})

		this.clearForm();

		let temp = document.createElement("p");
		temp.innerHTML = "Field added successfully.";
		temp.classList.add("success");
		document.querySelector("form#add_user_form > button").after(temp);

		setTimeout(() => {
			temp.remove();
		}, 3000)
	}

	render() {
		return(
			<div id="add_user_container">
				<h2>Add User</h2>
				<form id="add_user_form">
					<div className="input_container">
						<Input inputType="text" inputPlaceholder="Name*" inputClass="name" onBlurHandler={this.onInputBlurHandler} onClickHandler={this.onInputClickHandler} />
					</div>
					<div className="input_container">
						<Input inputType="text" inputPlaceholder="Surname*" inputClass="surname" onBlurHandler={this.onInputBlurHandler} onClickHandler={this.onInputClickHandler} />
					</div>
					<textarea placeholder="Bio" className="bio" onBlur={(event) => this.setState({ bio: event.target.value }) }></textarea>
					<button type="button" onClick={(event) => { this.onButtonClickHandler() }} >Add</button>
					{this.state.cannotBeAdded && <p className="error_tooltip">Name/surname field cannot be empty.</p>}
				</form>
			</div>
		)
	}
}

export default AddUserForm;