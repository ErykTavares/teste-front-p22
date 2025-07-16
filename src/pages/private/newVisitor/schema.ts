import * as yup from 'yup';

const cpfRegex = /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;

export const newVisitorSchema = yup.object({
	name: yup.string().required('Nome é obrigatório'),
	cpf: yup.string().required('CPF é obrigatório').matches(cpfRegex, 'Formato de CPF inválido'),
	room: yup.string().required('Sala é obrigatória'),
	birthDate: yup.string().required('Data de nascimento é obrigatória'),
	email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
});
