import React, { useEffect, useState } from 'react';

import PageHeader from '@/components/PageHeader';
import AppLayout from '@/layout/appLayout';

import HistoryList from './components/HistoryList';

const History = () => {
	const [visitorysHistory, setVisitoryHistory] = useState<Visitors.Visitor[]>([]);

	const getVisitorsHistory = () => {
		const data = localStorage.getItem('visitors');

		if (data) {
			const visitorsHistory: Visitors.Visitor[] = JSON.parse(data);

			setVisitoryHistory(visitorsHistory);
		}
	};

	useEffect(() => {
		getVisitorsHistory();
	}, []);

	return (
		<AppLayout>
			<PageHeader title='Histórico de Visitantes' />

			<HistoryList visitorysHistory={visitorysHistory} />
		</AppLayout>
	);
};

export default History;
