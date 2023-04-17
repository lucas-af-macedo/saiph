import styled from "styled-components";
import UserContext from '../contexts/UserContext';
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const { userData, setUserData } = useContext(UserContext);
    const [options, setOptions] = useState(false)

    const navigate = useNavigate();

    function exit(){
        setUserData('')
        navigate('/')
    }

    function openOptions(){
        setOptions(!options)
    }

    function navigateTo(link){
        openOptions()
        navigate(link)
    }

    return<>
    
			<Container>
				<Box>
					<h1>SAYTH</h1>
                    <BoxButtons>
                        <Button onClick={()=>navigateTo('/dashboard/home')}>Home</Button>
                        <Button onClick={()=>navigateTo('/dashboard/cadastros')}>Cadastros</Button>
                        <Button onClick={()=>navigateTo('/dashboard/nfes')}>Consultar NFes</Button>
                        <Button onClick={()=>navigateTo('/dashboard/certificate')}>Cadastrar Certificado</Button>
                        <Button onClick={()=>navigateTo('/dashboard/perfil')}>Perfil</Button>
                    </BoxButtons>
                    <UserAndOptions>
                        <h2>Bem vindo(a), {userData.name}</h2>
                        <Exit>
                            <ion-icon onClick={exit} name="exit-outline"></ion-icon>
                        </Exit>
                        <Options>
                            <ion-icon onClick={openOptions} name="menu-outline"></ion-icon>
                            {options?
                            <BoxOptions onClick={openOptions}>
                                <div onClick={(e)=>e.stopPropagation()}>
                                    <Button onClick={()=>navigateTo('/dashboard/home')}>Home</Button>
                                    <Button onClick={()=>navigateTo('/dashboard/cadastros')}>Cadastros</Button>
                                    <Button onClick={()=>navigateTo('/dashboard/nfes')}>Consultar NFes</Button>
                                    <Button onClick={()=>navigateTo('/dashboard/certificate')}>Cadastrar Certificado</Button>
                                    <Button onClick={()=>navigateTo('/dashboard/perfil')}>Perfil</Button>
                                    <ButtonExit onClick={exit}>Sair</ButtonExit>
                                </div>
                            </BoxOptions>
                            :null}
                        </Options>
                    </UserAndOptions>
				</Box>
			</Container>
    </>
}

const UserAndOptions = styled.div`
    display: flex;

    h2{
        margin-right: 30px;
        margin-top: 40px;
    }
    @media (max-width: 950px) {
        h2{
            margin-top: 30px;
        }
    }

`
const Exit = styled.div`
    cursor: pointer;
    margin-top: 35px;
    font-size: 30px;
    margin-right: 15px;
    margin-left: 15px;
    color: #cf0000;
    @media (max-width: 950px) {
        display: none;
    }
`
const Button = styled.button`
    font-size: 15px;
    color: #733393;
    cursor: pointer;
    font-weight: 600;
    border: 0px;
    background-color: #ffffff00;
    transition: 400ms;
    padding: 10px 15px 10px 15px;
    :hover{
        background-color: #dddde955;
    }
`

const ButtonExit = styled.button`
    font-size: 15px;
    color: red;
    cursor: pointer;
    font-weight: 600;
    border: 0px;
    background-color: #ffffff00;
    transition: 400ms;
    padding: 10px 15px 10px 15px;
    :hover{
        background-color: #dddde955;
    }
`

const BoxOptions = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: #00000099;
    top: 0;
    left: 0;
    display: flex;
    justify-content: end;
    div{
        height: 100%;
        width: 300px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 100px;
    }
`

const Options = styled.div`
    margin-top: 35px;
    font-size: 30px;
    margin-right: 15px;
    margin-left: 15px;
    display: none;
    ion-icon{
        cursor: pointer;
    }
    @media (max-width: 950px) {
        margin-top: 25px;
        display: flex;
    }
`

const Container = styled.div`
	box-shadow: 0px -2px 7px #9999a5 inset;
	width: 100vw;
	position: fixed;
	height: 117px;
	background-color: #f7f7ff;
	display: flex;
	justify-content: center;
	top: 0;
	left: 0;
	z-index: 2;
    @media (max-width: 950px) {
        height: 90px;
    }
`
const Box = styled.div`
	width: 100%;
	max-width: 1280px;
	height: 117px;
	padding-left: 20px;
	padding-right: 20px;
	display: flex;
	justify-content: space-between;
    position: relative;
	h1{
		font-size: 80px;
		color: #433353;
		font-size: 60px;
		margin-top: 15px;
		margin-bottom: 35px;
	}
    @media (max-width: 950px) {
        h1{
            font-size: 40px;
        }
    }
`

const BoxButtons = styled.div`
    width: 100%;
    height: 117px;
    display: flex;
    justify-content: center;
    align-items: end;
    position: fixed;
    left: 0px;
    @media (max-width: 950px) {
        display: none;
    }
`