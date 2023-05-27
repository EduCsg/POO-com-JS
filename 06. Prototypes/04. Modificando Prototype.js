function Carro(marca, preco) {
	this.marca = marca;
	this.preco = preco;
}

Carro.prototype = {
	rodas: 4,

	ligar() {
		console.log(`${this.marca} ligou`);
	},
};

let bmw = new Carro("BMW", 100000);

console.log(bmw); // Carro { marca: 'BMW', preco: 100000 }

console.log(bmw.rodas); // 4
bmw.ligar(); // 'BMW ligou'

let ferrari = new Carro("Ferrari", 2000000);

Carro.prototype.tetoSolar = true;

Carro.prototype.abrirTetoSolar = function () {
	console.log("Abrir teto solar");
};

console.log(bmw.tetoSolar); // true
console.log(ferrari.tetoSolar); // true

// Isso mostra que mesmo declarando a propriedade
// após declarar o objeto, ele ainda assim é
// acessível, pois o objeto aponta para o prototype
// do construtor, e não para o construtor em si.
