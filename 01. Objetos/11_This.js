let pessoa = {
	nome: "Eduardo",
};

pessoa.idade = 18;

pessoa.falar = function () {
	console.log(`Olá, eu tenho ${this.idade} anos!`);
};

pessoa.falar(); // Olá, eu tenho 18 anos!

let ninja = {
	classe: "Profissional",
	arma: "Shuriken",
	atirarArma: function () {
		console.log(`Atirou a ${this.arma}`);
	},

	atirarDuasVezes: function () {
		for (let i = 0; i < 2; i++) {
			this.atirarArma();
		}
	},
};

ninja.atirarArma(); // Atirou a Shuriken
ninja.atirarDuasVezes();
// Atirou a Shuriken
// Atirou a Shuriken

let ninja2 = {
	classe: "Profissional",
	arma: "Kunai",
	atirarArma: function () {
		console.log(`Atirou a ${this.arma}`);
	},
};

ninja2.atirarArma(); // Atirou a Kunai
