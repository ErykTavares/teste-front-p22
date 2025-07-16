import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import AppLayout from '@/layout/appLayout';

import VisitorsList from './components/visitorsList';
import type { Visitors } from './types';

const Dashboard = () => {
	const [data, setData] = useState({
		allvisitors: [] as Visitors[],
		visitors: [
			{
				nome: 'Tony Stark',
				cpf: '111.111.111-11',
				sala: 'Laboratório 01',
				nascimento: '1970-05-29',
				email: 'tony@starkindustries.com',
				entrada: new Date().toISOString(),
				saida: null,
			},
			{
				nome: 'Pepper Potts',
				cpf: '222.222.222-22',
				sala: 'Sala de Reuniões',
				nascimento: '1975-03-10',
				email: 'pepper@stark.com',
				entrada: new Date().toISOString(),
				saida: null,
			},
			{
				nome: 'Bruce Banner',
				cpf: '333.333.333-33',
				sala: 'Laboratório 02',
				nascimento: '1969-12-18',
				email: 'bruce.banner@avengers.org',
				entrada: new Date().toISOString(),
				saida: null,
			},
		] as Visitors[],
	});

	const getVisitors = () => {
		const currentData = localStorage.getItem('visitors');

		if (currentData) {
			const allVisitors: Visitors[] = JSON.parse(currentData);
			const filteredVisitors = allVisitors.filter((fill: Visitors) => fill.saida === null);

			setData((prev) => ({
				allvisitors: allVisitors,
				visitors: [...prev.visitors, ...filteredVisitors],
			}));
		}
	};

	const handleSetNewData = (newVisitorsList: Visitors[]) => {
		localStorage.setItem('visitors', JSON.stringify(newVisitorsList));
		const filteredVisitors = newVisitorsList.filter((fill: Visitors) => fill.saida === null);
		setData({
			allvisitors: newVisitorsList,
			visitors: filteredVisitors,
		});
	};

	useEffect(() => {
		getVisitors();
	}, []);

	return (
		<AppLayout>
			<Typography variant='h5' gutterBottom>
				Visitantes Ativos
			</Typography>
			<VisitorsList data={data} handleSetNewData={handleSetNewData} />
		</AppLayout>
	);
};

export default Dashboard;
