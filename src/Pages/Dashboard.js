import styled from "styled-components";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
	return (
		<Body>
            <Container>
				<Outlet />
            </Container>
		</Body>
	);
}
const Body = styled.div`
	background-color: black;
	width: 100vw;
	height: 100vh;
    display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	background-color: white;
	border-radius: 25px;
	width: 500px;
	height: 700px;
	display: flex;
	align-items: center;
	justify-content: center;
`