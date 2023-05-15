function Ninja(nome, arma) {
	this.nome = nome;

	this.arma = arma;

	this.atirarArma = function () {
		console.log(`Atirou a ${this.arma}`);
	};
}

let ninja1 = new Ninja("Teste", "Shuriken");

console.log(ninja1);
/*Ninja {
    nome: 'Teste',
    arma: 'Shuriken',
    atirarArma: [Function (anonymous)]
  } */

console.log(ninja1.nome); // Teste
ninja1.atirarArma(); // Atirou a Shuriken

let ninja2 = new Ninja("Matheus", "Kunai");
console.log(ninja2);
/*Ninja {
    nome: 'Matheus',
    arma: 'Kunai',
    atirarArma: [Function (anonymous)]
  } */

console.log(ninja2.nome); // Matheus
ninja2.atirarArma(); // Atirou a Kunai
