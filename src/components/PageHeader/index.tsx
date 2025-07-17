import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

interface PageHeaderProps {
	title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
	const navigate = useNavigate();

	const handleGoToNewVisitor = () => {
		navigate('/new-visitor');
	};

	return (
		<Stack
			width='100%'
			display='flex'
			flexDirection='row'
			justifyContent='space-between'
			alignItems='flex-start'
			mb={2}>
			<Typography variant='h5'>{title}</Typography>
			<Button variant='contained' color='warning' onClick={handleGoToNewVisitor}>
				Novo Visitante
			</Button>
		</Stack>
	);
};

export default PageHeader;
