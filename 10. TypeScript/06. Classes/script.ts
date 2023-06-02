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

let Eduardo = new Humano("Eduardo", 18);

console.log(Eduardo); // Humano { nome: 'Eduardo', idade: 18 }
console.log(Eduardo.seApresentar()); // O nome é Eduardo e tem 18 anos!
