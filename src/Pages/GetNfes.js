import styled from "styled-components"
import { useState, useEffect, useContext } from "react"
import axios from "axios"

import UserContext from "../contexts/UserContext"

export default function GetNfes(){
    const [data, setData] = useState([])

    const { userData } = useContext(UserContext);
    
    useEffect(()=>{
        const link = 'http://localhost:7000/auth/documents/'
        const config = {
			headers: {
				authorization: `Bearer ${userData.token}`,
			},
		};
        axios.get(link, config)
            .then((res)=>{
                console.log(res.data[0])
                let body = res.data
                setData(body)
            })
            .catch((err)=>{
                console.log(err)
            })

    },[])
    return(
    <>
        <Container>
            <Title>Consultar NFes</Title>
            {data.length? 
            <SelectDocument>
                <h1>Selecione uma opção para ver as NFes:</h1>
                {data.map((item)=>(
                    <Div key={item.id}>

                    </Div>))}
            </SelectDocument>: 
            <h1>Você não tem nenhum certificado cadastrado, para conseguir acessar as NFes, acesse o cadastrar certificado e envie o seu certificado!</h1>
            }
        </Container>
    </>)
}

const Div = styled.div`

`
const SelectDocument = styled.div`

`

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