import axios from "axios";
import React from "react";

export default function Certificate() {
	const [selectedFile, setSelectedFile] = React.useState(null);
	const [password, setPassword] = React.useState(null);

	const handleFileUpload = (event) => {
		setSelectedFile(event.target.files[0]);
		console.log(event.target.files[0]);
	};

	const handleFileUpload2 = (event) => {
		setPassword(event.target.value);
		console.log(event.target.value);
	};
	async function teste(event) {
		event.preventDefault();

		const formData = new FormData();
		formData.append("file", selectedFile);
		formData.append("password", password);

		const body2 = {
			email: "lucas@macedo.com",
			password: "lucas",
		};

		axios.post("http://localhost:7000/auth/certificate/", formData, {
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2ODE0MzM5ODV9.h7Ayl0C2WMdijkiZ550J3nOLe_yo9EzxQ3oHMg6dyG8",
				"Content-Type": "multipart/form-data",
			},
		});
	}
	return (
		<form onSubmit={teste}>
			<input type="file" name="file" onChange={handleFileUpload} />
			<input type="text" name="text" onChange={handleFileUpload2} />
			<button>teste</button>
		</form>
	);
}
