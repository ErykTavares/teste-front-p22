import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useMemo } from 'react';

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

	const postLog = (cpf: string, room: string) => {
		const visitor = allvisitors.find((fin) => fin.cpf === cpf);

		if (visitor) {
			const logs = JSON.parse(localStorage.getItem('logs') || '[]');

			logs.push({
				timestamp: new Date().toISOString(),
				message: `O visitante ${visitor.nome} saiu da sala ${room}.`,
			});

			localStorage.setItem('logs', JSON.stringify(logs));
		}
	};

	const postLeft = (cpf: string, room: string) => {
		const editedVisitors = allvisitors.map((item) =>
			item.cpf === cpf && item.saida === null
				? { ...item, saida: new Date().toISOString() }
				: item,
		);

		handleSetNewData(editedVisitors);

		postLog(cpf, room);
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
				columns={visitorsColumns(postLeft)}
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
