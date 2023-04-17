import styled from "styled-components"
import { useState, useEffect, useContext } from "react"
import axios from "axios"

import UserContext from "../contexts/UserContext"
import Document from "../components/Document"

export default function Documents(){
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
            <Title>Cadastros</Title>
            {data.map((item)=>(<Document key={item.id} item={item}/>))}
        </Container>
    </>)
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    padding-top: 30px;
`

const Title = styled.div`
    font-size: 25px;
    font-weight: 500;
    margin-left: 50px;
    margin-bottom: 40px;
`