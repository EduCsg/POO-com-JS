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
