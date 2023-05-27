function Carro(marca, preco) {
	this.marca = marca;
	this.preco = preco;
}

Carro.prototype.cor = "preto";

let fusca = new Carro("Fusca", 1000);

// Caso não seja sobrescrita, o valor default será o padrão
// declarado no prototype
console.log(fusca.cor); // preto

fusca.cor = "rosa";

console.log(fusca.cor); // rosa

fusca.cor = "teste";
console.log(fusca.cor); // teste
