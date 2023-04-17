import axios from "axios";
import React from "react";
import styled from "styled-components";

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
		<Container>
			<Title>Cadastro do Certificado</Title>
		<Form onSubmit={teste}>
			<input type="file" name="file" onChange={handleFileUpload} />
			<input type="text" name="text" placeholder="Senha" onChange={handleFileUpload2} />
			<button>Enviar Certificado</button>
		</Form>
		</Container>
	);
}

const Container = styled.div`
    height: auto;
    width: 100%;
    margin-left: 50px;
	margin-right: 50px;
    margin-bottom: 50px;
	padding-top: 30px;
`

const Title = styled.div`
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
	input{
		max-width: 300px;
		margin-bottom: 8px;
		height: 30px;
	}
	button{
		margin-top: 5px;
		max-width: 300px;
		height: 30px;
		box-shadow: 0px 0px 2px black;
		border-radius: 3px;
		outline: 0px;
		border: 0px;
		background-color: #6082f0;
		font-size: 15px;
		color: white;
		font-weight: 600;
		transition: 400ms;
		cursor: pointer;
		:hover{
			background-color: #f7f7ff;
			color: #6082f0;
		}
	}
		
`
