const robo = {
	bracos: 3,
	pernas: 2,
	arma: "metralhadora",
	armaEspecial: "foguete",

	// Método é uma função encapsulada dentro de uma classe
	atirar: function () {
		console.log("pew pew pew");
	},
};

robo.atirar(); // pew pew pew
robo.atirar(); // pew pew pew
robo.atirar(); // pew pew pew

let pessoa = {
	nome: "Eduardo",
	falar: function () {
		console.log(`Olá, meu nome é ${pessoa.nome}`);
	},
};

pessoa.falar(); // Olá, meu nome é Eduardo

console.log(pessoa.falar); // ƒ () { console.log(`Olá, meu nome é ${pessoa.nome}`); }
