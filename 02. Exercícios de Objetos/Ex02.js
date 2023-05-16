// Crie um objeto Pessoa com a propriedade Nome
// Crie um método que exiba o nome do objeto Pessoa

let Pessoa = {
	nome: "Eduardo",

	exibirNome() {
		console.log(`O nome é ${this.nome}`);
	},
};

Pessoa.exibirNome(); // O nome é Eduardo
