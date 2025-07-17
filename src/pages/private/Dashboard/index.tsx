import { useEffect, useState } from 'react';

import PageHeader from '@/components/PageHeader';
import AppLayout from '@/layout/appLayout';

import VisitorsList from './components/visitorsList';
import type { Visitors } from './types';
import { defaultVisitors } from './utils';

const Dashboard = () => {
	const [data, setData] = useState({
		allvisitors: [] as Visitors[],
		visitors: [] as Visitors[],
	});

	const getVisitors = () => {
		const currentData = localStorage.getItem('visitors');

		if (currentData?.length) {
			const allVisitors: Visitors[] = JSON.parse(currentData);
			const filteredVisitors = allVisitors.filter((fill: Visitors) => fill.saida === null);

			setData({
				allvisitors: allVisitors,
				visitors: filteredVisitors,
			});
		} else {
			const filteredVisitors = defaultVisitors.filter(
				(fill: Visitors) => fill.saida === null,
			);
			setData({
				allvisitors: defaultVisitors,
				visitors: filteredVisitors,
			});

			localStorage.setItem('visitors', JSON.stringify(defaultVisitors));
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
			<PageHeader title='Visitantes Ativos' />

			<VisitorsList data={data} handleSetNewData={handleSetNewData} />
		</AppLayout>
	);
};

export default Dashboard;
