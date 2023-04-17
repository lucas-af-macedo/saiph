import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { useState, useContext } from "react";
import axios from "axios";
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
	const [object, setObject] = useState({email:'', password:''});
	const [error, setError] = useState({email:'', password:''});
	const [errorResponse, setErrorResponse] = useState('');
	const [disabled, setDisabled] = useState(false)

	const { setUserData } = useContext(UserContext);

	const navigate = useNavigate();

	function change(event){
		let new_object = Object.assign({}, object)
		let new_error = Object.assign({}, error)
		event.target.value = event.target.value.trim()
		new_object[event.target.name] = event.target.value
		new_error[event.target.name] = ''
		setObject(new_object)
		setError(new_error)
		setErrorResponse('')
	}

	async function submit(event) {
		event.preventDefault();
		let new_error = Object.assign({}, error)
		let sendBody = true

		setDisabled(true)

		if (object.password.length<5){
			new_error.password = 'A deve ter mais que 5 digitos!';
			sendBody = false
		}
		if(!object.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i)){
			new_error.email = 'E-mail invalido!';
			sendBody = false
		}
		if (sendBody){
			const link = "http://localhost:7000/sign-in/"
			axios.post(link, object)
				.then((res)=>{
					setDisabled(false)
					navigate('/dashboard/home')
					setUserData(res.data)
				})
				.catch((err)=>{
					setErrorResponse('E-mail e/ou senha estão invalidos!')
					setDisabled(false)
				})
		}
		
		setError(new_error)
		setDisabled(false)
	}
	return (<>
	<Body>
		<BoxLeft>
			<h1>SAYTH</h1>
		</BoxLeft>
		<BoxRigth>
			<TextBox>
			<h1>Sign In</h1>
			</TextBox>
			<Form onSubmit={submit}>
				<Input label="E-mail" name="email" error={error.email.length>0} type="text" helperText={error.email} fullWidth variant="outlined" onChange={change} />
				<Input label="Senha" name="password" error={error.password.length>0} type="password" helperText={error.password} fullWidth variant="outlined" onChange={change} />
				<button type="submit" disabled={disabled}>Entrar</button>
				{errorResponse? <Error>{errorResponse}</Error>:null}
			</Form>
			<Link onClick={()=>navigate('/sign-up')}>Não possui login? Inscreva-se</Link>
		</BoxRigth>
	</Body>
	</>);
}

const Error = styled.h1`
	color: red;
	font-size: 13px;
	margin-top: 5px;
`

const Link = styled.h1`
	cursor: pointer;
	color: #6082f0;
`
	

const Body = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: #f7f7ff;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 700px){
		justify-content: center;
		flex-direction: column;
	}
`

const BoxLeft = styled.div`
	height: 100%;
	width: calc(100vw - 400px);
	display: flex;
	align-items: center;
	h1{
		font-size: 80px;
		color: #433353;
		margin-bottom: 200px;
		margin-left: 10vw;
	}
	@media (max-width: 800px){
		width: 50vw;
		h1{
			margin-left: 7vw;
		}
	}
	@media (max-width: 700px){
		height: auto;
		max-width: 500px;
		width: 100%;
		h1{
			font-size: 60px;
			margin-top: 22px;
			margin-left: 10px;
			margin-bottom: 35px;
		}
	}
`

const BoxRigth = styled.div`
	width: 400px;
	height: 100%;
	background-color: #dddde9;
	box-shadow: 0px 0px 7px #9999a5;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: scroll;
	flex-direction: column;
	::-webkit-scrollbar {
  		display: none;
	}
	@media (max-width: 800px){
		width: 50vw;
	}
	@media (max-width: 700px){
		justify-content: flex-start;
		width: 100vw;
	}
`

const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 500px;
	padding-left: 30px;
	font-size: 30px;
	@media (max-width: 700px){
		margin-top: 20px;
	}
`

const Form = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-width: 500px;
	padding: 30px;
	button{
		width: 100%;
		box-shadow: 0px 0px 2px black;
		height: 50px;
		border-radius: 3px;
		outline: 0px;
		border: 0px;
		background-color: #6082f0;
		font-size: 20px;
		color: white;
		font-weight: 600;
		margin-top: 15px;
		transition: 400ms;
		cursor: pointer;
		:hover{
			background-color: #f7f7ff;
			color: #6082f0;
		}
		:disabled{
			background-color: gray;
		}
	}
`
const Input = styled(TextField)`
	margin-bottom: 8px !important;
	color: red !important;
	input{
		background: #ededf9 !important;
		border-radius: 6px;
	}
	.Mui-focused fieldset{
		border-color: ${props => props.error ? 'red' : '#6082f0 !important'};
	}
	.Mui-focused.MuiInputLabel-outlined{
		color: ${props => props.error ? '' : '#6082f0 !important'};
	}
`
