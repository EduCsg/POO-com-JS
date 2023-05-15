let carro = {
	tipo: "SUV",
	ligar() {
		console.log("Ligou!");
	},
};

console.log(carro.tipo); // SUV
carro.ligar(); // Ligou!

delete carro.tipo;
delete carro.ligar;

console.log(carro.tipo); // undefined
console.log(carro.ligar); // undefined
