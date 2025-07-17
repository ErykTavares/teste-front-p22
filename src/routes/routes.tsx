import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import Dashboard from '@/pages/private/Dashboard';
import History from '@/pages/private/History';
import Logs from '@/pages/private/LogsPage';
import NewVisitor from '@/pages/private/newVisitor';
import Login from '@/pages/public/Login';

import PrivateRoute from './privateRoute';


const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='Login' element={<Login />} />

				<Route element={<PrivateRoute />}>
					<Route path='/' element={<Dashboard />} />
					<Route path='/new-visitor' element={<NewVisitor />} />
					<Route path='/history' element={<History />} />
					<Route path='/logs' element={<Logs />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
