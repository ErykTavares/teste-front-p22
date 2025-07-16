import { Box, Divider, List, ListItemButton, ListItemText } from '@mui/material';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { menuItems } from './utils';

const Sidebar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const menuList = useMemo(
		() =>
			menuItems.map(({ text, path }) => (
				<ListItemButton
					key={text}
					selected={location.pathname === path}
					onClick={() => navigate(path)}
					sx={{
						color: 'white',
						'&.Mui-selected': {
							bgcolor: 'secondary.main',
						},
						'&:hover': { bgcolor: 'secondary.dark' },
					}}>
					<ListItemText primary={text} />
				</ListItemButton>
			)),
		[location.pathname, navigate],
	);

	return (
		<Box
			sx={{
				width: 220,
				height: '100vh',
				bgcolor: 'primary.main',
				color: 'white',
				display: 'flex',
				flexDirection: 'column',
				pt: 2,
			}}>
			<Box sx={{ px: 2, mb: 2, fontWeight: 'bold', fontSize: '1.25rem' }}>Stark Tower</Box>
			<Divider sx={{ bgcolor: 'white' }} />
			<List>{menuList}</List>
		</Box>
	);
};

export default Sidebar;
