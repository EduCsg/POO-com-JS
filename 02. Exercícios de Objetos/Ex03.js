// Crie um objeto Ninja por Constructor Function
// Com a propriedade Nome e o método AtirarShuriken

function Ninja(nome, arma) {
	this.nome = nome;
	this.arma = arma;

	this.atirarArma = () => {
		console.log(`Atirou a ${this.arma}!`);
	};
}

let Ninja1 = new Ninja("teste", "shuriken");

console.log(Ninja1); /*
Ninja {
  nome: 'teste',
  arma: 'shuriken',
  atirarArma: [Function (anonymous)]
} */

Ninja1.atirarArma(); // Atirou a Shuriken!
