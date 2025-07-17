import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { menuItems } from './utils';

const Sidebar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const menuList = useMemo(
		() =>
			menuItems.map(({ text, path, icon }) => (
				<ListItemButton
					key={text}
					selected={location.pathname === path}
					onClick={() => navigate(path)}
					sx={{
						padding: '.6rem .5rem',
						color: 'white',
						borderRadius: 1,
						'&.Mui-selected': {
							bgcolor: 'secondary.main',
						},
						'&:hover': { bgcolor: 'secondary.dark' },
					}}>
					<ListItemIcon sx={{ color: 'white' }}>{icon}</ListItemIcon>
					<ListItemText primary={text} />
				</ListItemButton>
			)),
		[location.pathname, navigate],
	);

	return (
		<Box
			sx={{
				width: 240,
				height: '100vh',
				bgcolor: 'primary.main',
				color: 'white',
				display: 'flex',
				flexDirection: 'column',
				pt: 2,
			}}>
			<Box sx={{ px: 2, mb: 2, fontWeight: 'bold', fontSize: '1.25rem' }}>Menu</Box>
			<Divider sx={{ bgcolor: 'white' }} />
			<List sx={{ py: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>{menuList}</List>
		</Box>
	);
};

export default Sidebar;
