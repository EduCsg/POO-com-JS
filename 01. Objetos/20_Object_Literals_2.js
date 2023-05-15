// além da facilidade na declaração das variáveis, é possível também
// declarar um METHOD sem utilizar FUNCTION

let rodas = 4;
let portas = 4;
let aro = 20;
let tetoSolar = true;

let carro = {
	rodas,
	portas,
	aro,
	tetoSolar,
	bancoDeCouro: true,

	ligar() {
		console.log("Ligou!");
	},

	// OU (Método antigo)

	desligar: function () {
		console.log("Desligou!");
	},
};

console.log(carro); // { rodas: 4, portas: 4, aro: 20, tetoSolar: true }

carro.ligar(); // Ligou!

carro.desligar(); // Desligou!
