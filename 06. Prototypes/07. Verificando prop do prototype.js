// Utilizando prototype com props de nomes iguais

function Carro(marca, preco) {
	this.marca = marca;
	this.preco = preco;
	this.calota = true;
}

Carro.prototype.cor = "preto";
Carro.prototype.calota = false;

let fusca = new Carro("Fusca", 1000);

console.log(fusca.hasOwnProperty("calota")); // true, pois vem do objeto
console.log(fusca.hasOwnProperty("cor")); // false, pois vem do prototype (verificado após o obj)

console.log(fusca.hasOwnProperty("marca")); // true, pois vem do objeto
console.log(fusca.constructor.prototype.hasOwnProperty("marca"));
// false, pois vem do prototype (verificado após o obj)

Carro.prototype.marca = "teste";

console.log(fusca.constructor.prototype.hasOwnProperty("marca"));
// true, pois vem do prototype
