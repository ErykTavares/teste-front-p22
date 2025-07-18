import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useMemo } from 'react';

import { columns } from '../../utils';

interface HistoryListProps {
	visitorysHistory: Visitors.Visitor[];
}

const HistoryList = ({ visitorysHistory }: HistoryListProps) => {
	const rows = useMemo(
		() => visitorysHistory.map((item, index) => ({ id: index, ...item })),
		[visitorysHistory],
	);

	if (!visitorysHistory.length) {
		return (
			<Typography variant='body1' color='textSecondary'>
				Nenhum visitante no momento.
			</Typography>
		);
	}

	return (
		<Box mt={3} sx={{ width: '100%', height: 500 }}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { pageSize: 10 },
					},
				}}
				disableRowSelectionOnClick
			/>
		</Box>
	);
};

export default HistoryList;
