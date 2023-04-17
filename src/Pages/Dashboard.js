import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Dashboard() {
	return (
		<Body>
			<Header/>
            <Container>
				<Outlet />
            </Container>
		</Body>
	);
}
const Body = styled.div`
	background-color: #dddde9;
	width: 100vw;
	min-height: 100vh;
	height: 100%;
    display: flex;
	justify-content: center;
	position: relative;
`;

const Container = styled.div`
	margin-top: 117px;
	background-color: white;
	width: 100%;
	max-width: 1280px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 0px 3px gray;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	@media (max-width: 950px) {
        margin-top: 90px;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
    }
`