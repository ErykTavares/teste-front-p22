import { Box, Container } from '@mui/material';

import Header from '@/components/header';
import Sidebar from '@/components/sideBar';

interface AppLayoutProps {
	children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
	return (
		<Container
			maxWidth='xl'
			sx={{ display: 'flex', height: '100vh', padding: 0, paddingLeft: 0, paddingRight: 0 }}
			disableGutters>
			<Sidebar />
			<Box
				sx={{
					width: `calc(100% - 240px)`,
					flexGrow: 1,
					display: 'flex',
					flexDirection: 'column',
				}}>
				<Header />
				<Box
					component='main'
					sx={{ flexGrow: 1, p: 3, bgcolor: '#f4f6f8', overflowY: 'auto' }}>
					{children}
				</Box>
			</Box>
		</Container>
	);
};

export default AppLayout;
