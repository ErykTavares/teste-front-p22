import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const Header = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem('isAuthenticated');
		navigate('/Login');
	};

	return (
		<AppBar position='static' color='primary' sx={{ height: 64 }}>
			<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography variant='h6'>Stark Tower</Typography>
				<Button color='inherit' onClick={handleLogout}>
					Sair
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
