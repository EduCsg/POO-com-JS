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
};

pessoa.getNome(); // Eduardo
pessoa.setNome("TESTE");
pessoa.getNome(); // TESTE

console.log(pessoa.idade); // 29
pessoa.aniversario();
console.log(pessoa.idade); // 30
pessoa.dizerIdade(); // A minha idade é 30

pessoa.podeDirigir(); // Pode dirigir

let calculadora = {
	numeros: 0,

	somar(a, b) {
		this.numeros = a + b;
	},

	subtracao(a) {
		this.numeros -= a;
	},
};

calculadora.somar(2, 3);
console.log(calculadora.numeros); // 5

calculadora.subtracao(3);
console.log(calculadora.numeros); // 2
