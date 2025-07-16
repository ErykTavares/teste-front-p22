import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useMemo } from 'react';

import type { Visitors } from '../../types';
import { visitorsColumns } from '../../utils';

interface VisitorsListProps {
	data: {
		allvisitors: Visitors[];
		visitors: Visitors[];
	};
	handleSetNewData: (newVisitorsList: Visitors[]) => void;
}

const VisitorsList = ({ data, handleSetNewData }: VisitorsListProps) => {
	const { visitors, allvisitors } = data;

	const rows = useMemo(() => visitors.map((item, index) => ({ id: index, ...item })), [visitors]);

	const registrarSaida = (cpf: string) => {
		const updated = allvisitors.map((v) =>
			v.cpf === cpf && v.saida === null ? { ...v, saida: new Date().toISOString() } : v,
		);

		// Atualiza localStorage
		localStorage.setItem('visitantes', JSON.stringify(updated));

		// Atualiza estado dos visitantes ativos
		const novosAtivos = updated.filter((v) => v.saida === null);
		handleSetNewData(novosAtivos);

		// Adiciona log
		const visitante = allvisitors.find((v) => v.cpf === cpf);
		if (visitante) {
			const logs = JSON.parse(localStorage.getItem('logs') || '[]');
			logs.push({
				timestamp: new Date().toISOString(),
				message: `Visitante ${visitante.nome} saiu da torre.`,
			});
			localStorage.setItem('logs', JSON.stringify(logs));
		}
	};

	if (!visitors.length) {
		return (
			<Typography variant='body1' color='textSecondary'>
				Nenhum visitante ativo no momento.
			</Typography>
		);
	}

	return (
		<Box mt={3} sx={{ width: '100%', height: 500 }}>
			<DataGrid
				rows={rows}
				columns={visitorsColumns(registrarSaida)}
				pagination
				initialState={{
					pagination: {
						paginationModel: { pageSize: 5 },
					},
				}}
				disableRowSelectionOnClick
			/>
		</Box>
	);
};

export default VisitorsList;
