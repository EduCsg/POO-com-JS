// Para realizar um Loop em objetos, o método
// mais indicado é o for..in

// for (variavel in objeto) {
// 	// código a ser executado
// }

// O for..in irá percorrer todas as propriedades enumeráveis
// (que não sejam símbolos) de um objeto, e para cada propriedade
// diferente, irá executar o código dentro do for.

function Carro(marca, preco, cor, aro) {
	this.marca = marca;
	this.preco = preco;
	this.cor = cor;
	this.aro = aro;
	this.calota = true;
}

let fusca = new Carro("Fusca", 1000, "preto", 16);

for (prop in fusca) {
	// console.log(prop);
	/*
	 * marca
	 * preco
	 * cor
	 * aro
	 * calota */

	console.log(`${prop} -> ${fusca[prop]}`);
	/*
	 * marca -> Fusca
	 * preco -> 1000
	 * cor -> preto
	 * aro -> 16
	 * calota -> true */
}
