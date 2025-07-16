import {
  Dashboard,
  Groups,
  History,
  ListAlt,
  PersonAdd,
} from '@mui/icons-material';

export const menuItems = [
  { text: 'Dashboard', path: '/', icon: <Dashboard /> },
  { text: 'Cadastrar Visitante', path: '/new-visitor', icon: <PersonAdd /> },
  { text: 'Visitantes Ativos', path: '/active', icon: <Groups /> },
  { text: 'Histórico de Visitantes', path: '/history', icon: <History /> },
  { text: 'Logs do Sistema', path: '/logs', icon: <ListAlt /> },
];
