/*
  MÉTODOS ESTÁTICOS
  
  Os métodos estáticos só podem ser acessados caso seja mencionado
    o nome da classe antes do método.

  Isso faz com que não seja necessário instanciar um novo
    objeto para utilizar o método.

  Tira a necessidade de instanciar um novo objeto para
    utilizar o método.
    
  É conhecido também por Métodos Helpers, funcionam como
    uma biblioteca dentro do projeto */

// Comummente, a classe Helper só possui métodos estáticos
class Helper {
	static tratamento(tratamento, nome) {
		console.log(`Bem vindo ${tratamento} ${nome}!`);
	}
}

Helper.tratamento("Sr.", "Eduardo"); // Bem vindo Sr. Eduardo!
Helper.tratamento("Dr.", "João"); // Bem vindo Dr. João!

class Humano {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}

	mostrarNome(tratamento) {
		Helper.tratamento(tratamento, this.nome);
	}
}

let eduardo = new Humano("Eduardo", 18);

eduardo.mostrarNome("Teste"); // Bem vindo Teste Eduardo!
eduardo.mostrarNome("Alou"); // Bem vindo Alou Eduardo!
