import type { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
	{ field: 'nome', headerName: 'Nome', flex: 1 },
	{ field: 'cpf', headerName: 'CPF', flex: 1 },
	{ field: 'sala', headerName: 'Sala', flex: 1 },
	{
		field: 'entrada',
		headerName: 'Entrada',
		flex: 1,
		valueFormatter: (value) => new Date(value).toLocaleString(),
	},
	{
		field: 'saida',
		headerName: 'Saída',
		flex: 1,
		valueFormatter: (value) => (value ? new Date(value).toLocaleString() : '—'),
	},
];
