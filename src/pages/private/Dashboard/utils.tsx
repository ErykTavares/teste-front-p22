import type { GridColDef } from '@mui/x-data-grid';
import React from 'react';

export const visitorsColumns = (
  registrarSaida: (cpf: string) => void
): GridColDef[] => [
  { field: 'nome', headerName: 'Nome', flex: 1 },
  { field: 'cpf', headerName: 'CPF', flex: 1 },
  { field: 'sala', headerName: 'Sala', flex: 1 },
  {
    field: 'entrada',
    headerName: 'Entrada',
    flex: 1,
    valueFormatter: (params: { value: string }) => new Date(params.value).toLocaleString(),
  },
  {
    field: 'acoes',
            headerName: 'Ações',
    sortable: false,    
    flex: 1,
    renderCell: ({ row }) => (
      <button onClick={() => registrarSaida(row.cpf)}>
        Registrar Saída
      </button>
    ),
  },
];
