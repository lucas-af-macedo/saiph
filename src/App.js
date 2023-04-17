import "./App.css";
import styled from "styled-components";
import { UserProvider } from "./contexts/UserContext";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Certificate from "./Pages/Certificate";
import SignIn from "./Pages/SignIn";
import useToken from "./hooks/useToken";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Pages/SignUp";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./Pages/Home";
import Documents from "./Pages/Documents";
import GetNfes from "./Pages/GetNfes";
import Profile from "./Pages/Profile";

export default function App() {
	return (
		<UserProvider>
			<Router>
			<GlobalStyle />
				<Routes>
					<Route path="/" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route
						path="/dashboard"
						element={
							<ProtectedRouteGuard>
								<Dashboard />
							</ProtectedRouteGuard>
						}
					>	
						<Route path="home" element={<Home/>} />
						<Route path="certificate" element={<Certificate />} />
						<Route path="cadastros" element={<Documents />} />
						<Route path="nfes" element={<GetNfes />} />
						<Route path="perfil" element={<Profile />} />
					</Route>
				</Routes>
			</Router>
		</UserProvider>
	);
}

function ProtectedRouteGuard({ children }) {
	const token = useToken();

	if (!token) {
		return <Navigate to="/" />;
	}

	return <>{children}</>;
}

