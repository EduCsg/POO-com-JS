/*
PROTOTYPE METHODS

  Os prototype method são métodos que já existem dentro do
    objeto "Class", como os Getters e Setters
    
  Getter -> Retorna o valor de um atributo
  Setter -> Altera o valor de um atributo

  Por exemplo, caso recebamos um número inteiro e queiramos
    transformá-lo em um número binário, podemos utilizar o
    método toString() para isso, mas o método toString() não
    existe dentro da classe Number, então como podemos
    utilizá-lo?

  Para isso, basta utilizar o prototype method, que é
    um método que já existe dentro da classe Number, mas
    que não está disponível para uso, então precisamos
    "ativá-lo" para que possamos utilizá-lo. */

class Humano {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}

	nomeDaPessoa() {
		console.log(`O nome é ${this.nome}`);
	}

	set mudarNome(novoNome) {
		this.nome = "Sr. " + novoNome;
	}

	get receberNome() {
		return "O nome é " + this.nome;
	}
}

let matheus = new Humano("Matheus", 18);

console.log(matheus.nome); // Matheus
console.log(matheus.receberNome); // O nome é Matheus

matheus.mudarNome = "Teste";

console.log(matheus.nome); // Sr. Teste
console.log(matheus.receberNome); // O nome é Sr. Teste

// O get é utilizado para retornar o valor de um atributo
// ele pode ser substituido por um método que execute um
// código e retorne um valor (como no nomeDaPessoa()), porém
// utilizar um get é mais "elegante" e mais fácil de
// entender posteriormente
