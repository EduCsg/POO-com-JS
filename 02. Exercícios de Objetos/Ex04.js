// No objeto Ninja que a propriedade Shuriken, com uma quantidade máxima de estrelas
// A cada método, subtrai uma Shuriken
// O ninja não pode mais jogar Shurikens caso tenham acabado

function Ninja(nome, arma, qntd) {
	this.nome = nome;
	this.arma = arma;
	this.qntd = qntd;

	this.atirarArma = () => {
		if (this.qntd) {
			console.log(`Atirou a ${this.arma}!`);
			this.qntd--;
			console.log(`Restam ${this.qntd} munições!`);
		} else {
			console.log("Não há mais munições!");
		}
	};
}

let Ninja1 = new Ninja("teste", "shuriken", 2);

Ninja1.atirarArma();
// Atirou a shuriken!
// Restam 1 munições!

Ninja1.atirarArma();
// Atirou a shuriken!
// Restam 0 munições!

Ninja1.atirarArma();
// Não há mais munições!

Ninja1.atirarArma();
// Não há mais munições!
