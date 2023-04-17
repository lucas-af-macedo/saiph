import styled from "styled-components"

export default function Document({item}){
    console.log(item)
    return( 
    <>
        <Container>
            <h1>Nome: {item.document.name}</h1>
            <h2>Tipo de documento: {item.document.document_type}</h2>
            <h2>Número do documento: {item.document.document_number}</h2>
        </Container>
    </>)
}

const Container = styled.div`
    height: auto;
    width: 100%;
    margin-left: 50px;
    margin-bottom: 30px;
    h1{
        font-size: 19px;
        margin-bottom: 7px;
    }
    h2{
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 4px;
    }
`