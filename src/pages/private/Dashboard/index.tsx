import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const Dashboard = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem('isAuthenticated');
		navigate('/');
	};
	return (
		<Container maxWidth='md'>
			<Box mt={5}>
				<Typography variant='h4' gutterBottom>
					Painel de Controle - J.A.R.V.I.S
				</Typography>
				<Box mt={3} display='flex' flexDirection='column' gap={2}>
					<Button variant='contained' onClick={() => navigate('/cadastro')}>
						Cadastrar Visitante
					</Button>
					<Button variant='contained' onClick={() => navigate('/ativos')}>
						Visitantes Ativos
					</Button>
					<Button variant='contained' onClick={() => navigate('/historico')}>
						Histórico de Visitantes
					</Button>
					<Button variant='contained' onClick={() => navigate('/logs')}>
						Logs do Sistema
					</Button>
					<Button variant='outlined' color='secondary' onClick={handleLogout}>
						Sair
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default Dashboard;
