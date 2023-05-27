/*
  É possível também gerar uma Classe Anônima, seguindo o
    mesmo conceito das funções anônimas do JS.
    
  Obviamente a maneira explícita é mais recomendada, mas 
    é importante saber que é possível fazer dessa maneira.

  Para isso, basta atribuir a uma variável uma classe
  sem nome. */

let Humano = class {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}

	nomeDaPessoa() {
		console.log(`O nome é ${this.nome}`);
	}
};

let matheus = new Humano("Matheus", 18);

console.log(matheus); // Humano { nome: 'Matheus', idade: 18 }

matheus.nomeDaPessoa(); // O nome é Matheus
