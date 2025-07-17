import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IconButton, Tooltip } from '@mui/material';
import type { GridColDef } from '@mui/x-data-grid';

import type { Visitors } from './types';

export const visitorsColumns = (postLog: (cpf: string, room: string) => void): GridColDef[] => [
	{ field: 'nome', headerName: 'Nome', flex: 1 },
	{ field: 'cpf', headerName: 'CPF', flex: 1 },
	{ field: 'sala', headerName: 'Sala', flex: 1 },
	{
		field: 'entrada',
		headerName: 'Entrada',
		flex: 1,
		valueFormatter: (value: string) => new Date(value).toLocaleString(),
	},
	{
		field: 'acoes',
		headerName: 'Ações',
		sortable: false,
		flex: 1,
		renderCell: ({ row }) => (
			<Tooltip title='Registrar Saída'>
				<IconButton color='warning' size='small' onClick={() => postLog(row.cpf, row.sala)}>
					<ExitToAppIcon />
				</IconButton>
			</Tooltip>
		),
	},
];

export const defaultVisitors = [
	{
		nome: 'Tony Stark',
		cpf: '111.111.111-11',
		sala: 'room1',
		nascimento: '1970-05-29',
		email: 'tony@starkindustries.com',
		entrada: new Date().toISOString(),
		saida: null,
	},
	{
		nome: 'Pepper Potts',
		cpf: '222.222.222-22',
		sala: 'room1',
		nascimento: '1975-03-10',
		email: 'pepper@stark.com',
		entrada: new Date().toISOString(),
		saida: null,
	},
	{
		nome: 'Bruce Banner',
		cpf: '333.333.333-33',
		sala: 'room2',
		nascimento: '1969-12-18',
		email: 'bruce.banner@avengers.org',
		entrada: new Date().toISOString(),
		saida: null,
	},
] as Visitors[];
