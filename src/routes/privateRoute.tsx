import React from 'react';
import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {
	const isAuthenticated = localStorage.getItem('isAuthenticated');

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	return <Outlet />;
};

export default PrivateRoute;
