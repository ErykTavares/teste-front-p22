import * as yup from 'yup';

const schema = yup.object({
	email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
	password: yup.string().min(3, 'Mínimo é de 6 caracteres').required('Senha é obrigatória'),
});

export default schema;
