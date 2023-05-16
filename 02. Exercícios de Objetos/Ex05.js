// Crie um objeto Inimigo, com as propriedades Nome e Vivo (TRUE)
// O método atirarShuriken deve "Matar" o Inimigo, setando a prop Vivo como FALSE

function Ninja(nome, arma, qntd) {
	this.nome = nome;
	this.arma = arma;
	this.qntd = qntd;

	this.atirarArma = (obj) => {
		if (this.qntd) {
			console.log(`Atirou a ${this.arma}!`);
			this.qntd--;
			console.log(`Restam ${this.qntd} munições!`);

			console.log(`Matou o ${obj.nome}!`);
			obj.vivo = false;
		} else {
			console.log("Não há mais munições!");
		}
	};
}

let Ninja1 = new Ninja("teste", "shuriken", 2);

function Inimigo(nome) {
	this.nome = nome;
	this.vivo = true;
}

let Inimigo1 = new Inimigo("Inimigo1");

console.log(Inimigo1); // Inimigo { Nome: 'Inimigo1', Vivo: true }

Ninja1.atirarArma(Inimigo1); /*
Atirou a shuriken!
Restam 1 munições!
Matou o Inimigo1!
*/

console.log(Inimigo1); // Inimigo { Nome: 'Inimigo1', Vivo: false }
