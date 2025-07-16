declare namespace Visitors {
	export interface Visitor {
		nome: string;
		cpf: string;
		sala: string;
		nascimento?: string;
		email?: string;
		entrada: string;
		saida: string | null;
	}
}
