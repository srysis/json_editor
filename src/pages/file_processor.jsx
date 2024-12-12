import React from "react"

import Users from "../components/Users"
import AddUserForm from "../components/AddUserForm"

class FileProcessor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {showAddUserForm: false};

		this.uploadFile = this.uploadFile.bind(this);

		this.toggleAddUserForm = this.toggleAddUserForm.bind(this);
		this.addUser = this.addUser.bind(this);
		this.deleteUser = this.deleteUser.bind(this);

		this.downloadJSONFile = this.downloadJSONFile.bind(this);
	}

	uploadFile(event) {
		const fileReader = new FileReader();
		fileReader.readAsText(event.target.files[0], "UTF-8");
		fileReader.onload = (e) => {
			let users_data = JSON.parse(e.target.result);
			this.setState( {users: users_data, isFileUploaded: true, filename: event.target.files[0].name} );
		}
	}

	dropAndUploadFile(event) {
		event.preventDefault();

		const upload_file_element = document.querySelector("input#upload_file");

		const files = event.dataTransfer.files;

		if (files.length) {
			upload_file_element.files = files;

			this.onDropHandler(files);
		}
	}

	onDropHandler(files) {
		const fileReader = new FileReader();
		fileReader.readAsText(files[0]);

		fileReader.onload = (e) => {
			let users_data = JSON.parse(e.target.result);
			this.setState( {users: users_data, isFileUploaded: true, filename: files[0].name} );
		}
	}

	onDragOverHandler(event) {
		event.preventDefault();
		event.stopPropagation();

		const drop_area = document.querySelector("div.drop_area.desktop");
		drop_area.addEventListener("dragover", () => {
			drop_area.classList.add("drag-over");
		});
	}

	onDragLeaveHandler(event) {
		event.preventDefault();
		event.stopPropagation();

		const drop_area = document.querySelector("div.drop_area.desktop");
		drop_area.addEventListener("dragleave", () => {
			drop_area.classList.remove("drag-over");
		});
	}

	toggleAddUserForm() {
		const isVisible = this.state.showAddUserForm;

		this.setState( {showAddUserForm: !isVisible} );
	}

	addUser(user_record) {
		let id;

		if (this.state.users.length > 0) {
			const array_of_users = Object.entries(this.state.users); //convert array of objects into an array of arrays

			id = array_of_users[array_of_users.length - 1][1].id + 1; // find the ID of the last element in the new array and increment it by one
		} else { 
			// if 'users' does not have any elements, we set the ID as 1, since there are literally no elements in the array
			id = 1;
		}

		this.setState( { users: [ ...this.state.users, {id, ...user_record} ] } );
	}

	deleteUser(id) {
		const new_users = this.state.users.filter((user) => user.id !== id);

		this.setState( { users: new_users } );
	}

	downloadJSONFile(object, filename) {
		const temp_element = document.createElement("a");

		const data = new Blob([JSON.stringify(this.state.users)], {type: 'application/json'});

		temp_element.href = URL.createObjectURL(data);
		temp_element.download = "users.json";
		document.body.appendChild(temp_element);
		temp_element.click();

		temp_element.remove();
	}

	render() {
		return(
			<>
				{!this.state.isFileUploaded && 
					<>

						{/* this div will be shown if it's a desktop version */}
						<div className="drop_area desktop" 
							 onDragOver={(event) => this.onDragOverHandler(event)} 
							 onDragEnter={(event) => { event.preventDefault(); event.stopPropagation(); } } 
							 onDragLeave={(event) => this.onDragLeaveHandler(event)} 
							 onDrop={(event) => this.dropAndUploadFile(event)} 
						>
							<div>
								<p style={{ "marginTop" : "120px" }}>Drop your file here</p>
								<p style={{ "marginTop" : "20px" }}>or</p>
								<label htmlFor="upload_file" id="custom_upload_file" style={{ "marginTop" : "20px" }}>
									choose your file.
								</label>
							</div>
						</div>
						{/*--------------------------------------------------*/}

						{/* this div will be shown if it's a mobile version */}
						<div className="drop_area mobile">
							<div className="label_container">
								<label htmlFor="upload_file" id="custom_upload_file" style={{ "marginTop" : "20px" }}>
									Upload file
								</label>
							</div>
						</div>
						{/*-------------------------------------------------*/}

					</>
				}
				<input type="file" id="upload_file" accept=".json" onChange={(event) => this.uploadFile(event)} style={ { "display": "none" } } />
				{this.state.isFileUploaded &&
					<>
						<div id="options">
							<div>
								<label htmlFor="upload_file" id="custom_upload_file">
									Upload other file
								</label>
							</div>
							<div>
								<button type="button" className="save" onClick={this.downloadJSONFile}>Save to file</button>
							</div>
						</div>
						<div className="flex_container uploader">
							<div id="users_info">
								<Users users={this.state.users} onDelete={this.deleteUser} /> 
							</div>
							<AddUserForm onAdd={this.addUser} />
						</div>
					</>
				}
			</>
		)
	}
}

export default FileProcessor;