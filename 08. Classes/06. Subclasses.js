/*
  SUBCLASSES
  
  Se trata de uma maneira de herança, utilizando a palavra reservada extends.

  A classe que está sendo herdada é chamada de Superclasse, e a classe que
    está herdando é chamada de Subclasse. */

class Humano {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}

	falar() {
		console.log(`${this.nome} falou!`);
	}
}

// O extends puxa as propriedades da classe Humano
class Engenheiro extends Humano {
	constructor(nome, idade, especialidade) {
		// o Super vai elevar o nível das propriedades para a classe Humano,
		// ou seja, aqui ele passará o nome e a idade como parâmetros
		// para a classe Humano
		super(nome, idade);

		this.profissao = "Engenheiro";
		this.especialidade = especialidade;
	}
}

// Os parametros serão passados para o Engenheiro (linha 22)
let joao = new Engenheiro("Joao", 25, "Civil");

console.log(joao); /*
Engenheiro {
  nome: 'Joao',
  idade: 25,
  profissao: 'Engenheiro',
  especialidade: 'Civil'
} */

joao.falar(); // Joao falou!
