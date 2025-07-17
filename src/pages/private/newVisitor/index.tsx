import { yupResolver } from '@hookform/resolvers/yup';
import {
	Alert,
	Box,
	Button,
	Card,
	CardContent,
	Container,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import useDisclosure from '@/hooks/useDisclosure';
import AppLayout from '@/layout/appLayout';

import { newVisitorSchema } from './schema';
import type { NewVisitorForm } from './type';
import { defaultValues, rooms } from './utils';

const NewVisitor = () => {
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<NewVisitorForm>({
		defaultValues,
		resolver: yupResolver(newVisitorSchema),
	});
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();

	const postLog = (name: string) => {
		const logs = JSON.parse(localStorage.getItem('logs') || '[]');

		logs.push({
			timestamp: new Date().toISOString(),
			message: `Novo visitante cadastrado: ${name}`,
		});

		localStorage.setItem('logs', JSON.stringify(logs));
	};

	const postVisitor = (data: NewVisitorForm) => {
		const visitorsList: Visitors.Visitor[] = JSON.parse(
			localStorage.getItem('visitors') || '[]',
		);
		const activeRoomList = visitorsList?.filter(
			(fil: Visitors.Visitor) => fil?.sala === data.room && fil.saida === null,
		);

		if (activeRoomList?.length >= 3) {
			onOpen();
			return;
		}

		visitorsList.push({
			nome: data.name,
			cpf: data.cpf,
			sala: data.room,
			nascimento: data.birthDate,
			entrada: new Date().toISOString(),
			saida: null,
		});

		localStorage.setItem('visitors', JSON.stringify(visitorsList));

		postLog(data.name);

		reset();
		navigate('/');
	};

	return (
		<AppLayout>
			<Container maxWidth='sm'>
				{isOpen ? (
					<Alert severity='warning' onClose={onClose} sx={{ mb: 2 }}>
						Limite de 3 visitantes por sala atingido.
					</Alert>
				) : null}
				<Card sx={{ height: 'max-content', marginTop: 3 }}>
					<CardContent sx={{ height: '100%', overflowY: 'auto' }}>
						<Box>
							<Typography variant='h5' gutterBottom>
								Cadastrar Visitante
							</Typography>

							<form onSubmit={handleSubmit(postVisitor)}>
								<Controller
									name='name'
									control={control}
									render={({ field }) => (
										<TextField
											{...field}
											label='Nome'
											fullWidth
											margin='normal'
											error={!!errors.name}
											helperText={errors.name?.message}
										/>
									)}
								/>

								<Controller
									name='email'
									control={control}
									render={({ field }) => (
										<TextField
											{...field}
											label='E-mail'
											fullWidth
											margin='normal'
											error={!!errors.email}
											helperText={errors.email?.message}
										/>
									)}
								/>

								<Controller
									name='cpf'
									control={control}
									render={({ field }) => (
										<TextField
											{...field}
											label='CPF'
											fullWidth
											margin='normal'
											error={!!errors.cpf}
											helperText={errors.cpf?.message}
										/>
									)}
								/>

								<Controller
									name='room'
									control={control}
									render={({ field }) => (
										<FormControl
											fullWidth
											margin='normal'
											error={!!errors.room}>
											<InputLabel id='sala-label'>Sala</InputLabel>
											<Select
												labelId='sala-label'
												id='sala'
												label='Sala'
												{...field}>
												{rooms.map((room) => (
													<MenuItem key={room.value} value={room.value}>
														{room.label}
													</MenuItem>
												))}
											</Select>
											<FormHelperText>{errors.room?.message}</FormHelperText>
										</FormControl>
									)}
								/>

								<Controller
									name='birthDate'
									control={control}
									render={({ field }) => (
										<TextField
											{...field}
											label='Data de Nascimento'
											type='date'
											fullWidth
											margin='normal'
											slotProps={{ inputLabel: { shrink: true } }}
											error={!!errors.birthDate}
											helperText={errors.birthDate?.message}
										/>
									)}
								/>

								<Button
									color='success'
									variant='contained'
									type='submit'
									fullWidth
									sx={{ mt: 2 }}>
									Cadastrar
								</Button>
							</form>
						</Box>
					</CardContent>
				</Card>
			</Container>
		</AppLayout>
	);
};

export default NewVisitor;
