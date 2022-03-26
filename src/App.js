import { Routes, Route } from 'react-router-dom';

import EnvSpecificRouter from 'components/EnvSpecificRouter';

import { AuthUser } from 'globals/AuthUser';

import LoginPage from 'pages/Login';
import HomePage from 'pages/index';
import RegistrationPage from 'pages/Registration';

function App() {
	return (
		<AuthUser>
			<EnvSpecificRouter>
				<Routes>
					<Route path={'/'} element={<HomePage />} />
					<Route path={'/login'} element={<LoginPage />} />
					<Route path={'/registration'} element={<RegistrationPage />} />
				</Routes>
			</EnvSpecificRouter>
		</AuthUser>
	);
}

export default App;
