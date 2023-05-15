const pessoa = {
	nome: "Eduardo",
	idade: 29,

	falar: function () {
		console.log(`Oi, meu nome é ${this.nome}`);
	},

	aniversario() {
		this.idade++;
	},

	dizerIdade() {
		console.log(`A minha idade é ${this.idade}`);
	},

	getNome: function () {
		console.log(`O nome é ${this.nome}`);
	},

	setNome: function (novoNome) {
		this.nome = novoNome;
	},

	podeDirigir: function () {
		this.idade >= 18
			? console.log("Pode Dirigir")
			: console.log("Não pode dirigir");
	},

	caracteristicas: {
		cnh: true,
		carteira: ["Dinheiro", "Documento", "Moeda"],
	},
};

console.log(pessoa.caracteristicas); // { cnh: true, carteira: [ 'Dinheiro', 'Documento', 'Moeda' ] }
console.log(pessoa.caracteristicas.cnh); // true
console.log(pessoa.caracteristicas.carteira[2]); // Moeda
