import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const App = () => {  
	return (
		<Container maxWidth='sm'>
			<Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
				<Typography variant='h1' component='h2'>
					teste header
				</Typography>
			</Box>
		</Container>
	);
};

export default App;
