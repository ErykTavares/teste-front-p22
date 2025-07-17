import { Box, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useMemo } from 'react';

import type { Logs } from '../types';

interface LogsListProps {
	logs: Logs[];
}

const LogsList = ({ logs }: LogsListProps) => {
	const items = useMemo(
		() =>
			logs.reverse().map(({ message, timestamp }) => (
				<ListItem key={`${message}-${timestamp}`} divider>
					<ListItemText
						primary={message}
						secondary={new Date(timestamp).toLocaleString()}
					/>
				</ListItem>
			)),
		[logs],
	);

	if (!logs.length) {
		return (
			<Typography variant='body1' color='textSecondary'>
				Nenhum log registrado.
			</Typography>
		);
	}

	return (
		<Box mt={3} sx={{ width: '100%', height: 500 }}>
			<Card sx={{ height: 'max-content' }}>
				<CardContent sx={{ height: '100%', overflowY: 'auto' }}>
					<List>{items}</List>
				</CardContent>
			</Card>
		</Box>
	);
};

export default LogsList;
