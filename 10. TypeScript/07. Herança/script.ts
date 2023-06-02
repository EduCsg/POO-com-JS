class Humano {
	nome: string;
	idade: number;

	constructor(nome: string, idade: number) {
		this.nome = nome;
		this.idade = idade;
	}

	seApresentar() {
		return `O nome é ${this.nome} e tem ${this.idade} anos!`;
	}
}

class Ninja extends Humano {
	classe: string;

	constructor(nome: string, idade: number, classe: string) {
		super(nome, idade);

		this.classe = classe;
	}

	atirar() {
		console.log(`O ninja ${this.nome} atirou!`);
	}
}

let Eduardo = new Ninja("Eduardo", 18, "Estilo Ninja");

console.log(Eduardo); // Ninja { nome: 'Eduardo', idade: 18, classe: 'Estilo Ninja' }
console.log(Eduardo.seApresentar()); // O nome é Eduardo e tem 18 anos!
Eduardo.atirar(); // O ninja Eduardo atirou!
