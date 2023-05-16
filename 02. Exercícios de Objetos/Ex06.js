// Crie uma função que retorne se o obj é uma instância de outro Obj
// Deve apresentar no console as mensagens Positivo ou Negativo

// Helpers
function compareObj(obj1, obj2) {
	/* InstaceOf recebe
    primeiro - um Objeto
    segundo - uma Classe
  */

	if (obj1 instanceof obj2) {
		console.log(`O objeto ${obj1.nome} é uma instância de ${obj2.name}!`);
	} else {
		console.log(`O objeto ${obj1.nome} não é uma instância de ${obj2.name}!`);
	}
}

// Objetos

function Ninja(nome) {
	this.nome = nome;
}

function Inimigo(nome) {
	this.nome = nome;
}

let Ninja1 = new Ninja("teste");

let Inimigo1 = new Inimigo("Inimigo1");

// Testes

compareObj(Ninja1, Ninja); // O objeto teste é uma instância de Ninja!
compareObj(Inimigo1, Inimigo); // O objeto Inimigo1 é uma instância de Inimigo!
compareObj(Inimigo1, Ninja); // O objeto Inimigo1 não é uma instância de Ninja!
