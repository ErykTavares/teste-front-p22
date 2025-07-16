import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import schema from './schema';
import type { LoginForm } from './types';

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginForm>({
		resolver: yupResolver(schema),
	});
	const navigate = useNavigate();

	const loginPost = (data: LoginForm) => {
		if (data.email.length && data.password.length) {
			localStorage.setItem('isAuthenticated', 'true');
			navigate('/');
		}
	};

	return (
		<Container maxWidth='sm' sx={{ height: '100vh' }}>
			<Stack height='100%' alignItems='center' justifyContent='center'>
				<Box p={4} boxShadow={3} borderRadius={2}>
					<Typography variant='h4' fontWeight='medium' align='center' gutterBottom>
						Login
					</Typography>
					<form onSubmit={handleSubmit(loginPost)}>
						<TextField
							label='E-mail'
							fullWidth
							margin='normal'
							{...register('email')}
							error={!!errors.email}
							helperText={errors.email?.message}
						/>
						<TextField
							label='Senha'
							type='password'
							fullWidth
							margin='normal'
							{...register('password')}
							error={!!errors.password}
							helperText={errors.password?.message}
						/>
						<Box mt={2}>
							<Button variant='contained' color='primary' fullWidth type='submit'>
								Entrar
							</Button>
						</Box>
					</form>
				</Box>
			</Stack>
		</Container>
	);
};

export default Login;
