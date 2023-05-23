// Verifica se a prop vem do Objeto ou do Prototype

function Carro(marca, preco) {
	this.marca = marca;
	this.preco = preco;
}

Carro.prototype.cor = "preto";
Carro.prototype.calota = false;

let fusca = new Carro("Fusca", 1000);

// Se vier do objeto
if (fusca.hasOwnProperty("calota")) {
	console.log("A propriedade calota é do Objeto");

	// Se vier do prototype
} else if (fusca.constructor.prototype.hasOwnProperty("calota")) {
	console.log("A propriedade calota é do Prototype!");

	// Se não existir
} else {
	console.log("A propriedade calota não existe!");
}
