import React, { useEffect, useState } from 'react';

import PageHeader from '@/components/PageHeader';
import AppLayout from '@/layout/appLayout';

import LogsList from './LogsList';

interface Log {
	timestamp: string;
	message: string;
}

const Logs = () => {
	const [logs, setLogs] = useState<Log[]>([]);

	const getLogs = () => {
		const data = localStorage.getItem('logs');

		if (data) {
			const logsData: Log[] = JSON.parse(data);

			setLogs(logsData);
		}
	};

	useEffect(() => {
		getLogs();
	}, []);

	return (
		<AppLayout>
			<PageHeader title='Logs do Sistema' />

			<LogsList logs={logs} />
		</AppLayout>
	);
};

export default Logs;
