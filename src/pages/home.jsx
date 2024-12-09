import React from "react"
import { useNavigate } from "react-router-dom" 

function Home() {
	const navigate = useNavigate();

	return(
		<>
			<div id="intro_text">
				<h2>Choose your option</h2>
			</div>
			<div className="flex_container navigation">
				<div id="upload" onClick={() => { navigate("/upload") } }>
					<p>Upload file</p>
				</div>
				<span>or</span>
				<div id="create" onClick={() => { navigate("/create") } }>
					<p>Create empty file</p>
				</div>
			</div>
		</>
	)
}

export default Home;