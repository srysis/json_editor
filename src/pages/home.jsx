import React from "react"
import { useNavigate } from "react-router-dom" 

function Home() {
	const navigate = useNavigate();

	return(
		<>
			<div id="intro_text">
				<p>
					This is a very simple JSON editor.
					You can either create an empty file or you can import an existing JSON file, afterwhich you can choose what to do with it's content.
					You can add new records to or remove old ones from the file. After your work has been done, you can save the file to your PC.
				</p>
				<p>
					Please keep in mind that it is a rather limited service, as it only processes files of the following structure:
				</p>
				<pre>
					[
						&#123;
							<em> id</em>: numeric,
							<em> name</em>: string,
							<em> surname</em>: string,
							<em> bio</em>: string
						&#125;
					]
				</pre>
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