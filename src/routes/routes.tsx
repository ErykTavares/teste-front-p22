import { BrowserRouter, Route, Routes } from 'react-router';

import Dashboard from '@/pages/private/Dashboard';
import Login from '@/pages/public/Login';

import PrivateRoute from './privateRoute';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='Login' element={<Login />} />

				<Route element={<PrivateRoute />}>
					<Route path='/' element={<Dashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
