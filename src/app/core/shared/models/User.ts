export class User {
	id: number;

	cpf: string;

	name: string;

	email: string;

	password: string;

	token: string

	// createdAt: Date;
	// updatedAt: Date;

	constructor(id: number, name: string, cpf: string, email: string, password: string, token: string) {
		this.id = id;
		this.name = name;
		this.cpf = cpf;
		this.email = email;
		this.password = password;
		this.password = password;
		this.token = token;
		// this.createdAt = new Date();
		// this.updatedAt = new Date();
	}
}
