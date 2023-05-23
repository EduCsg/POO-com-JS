// Checa se o Objeto é Prototype de outro Objeto

let equipamentosDoCarro = {
	preco: "10000",
	calota: true,
	cor: "preto",
	aro: 16,
};

function Carro(marca) {
	this.marca = marca;
}

// Adiciona o objeto equipamentosDoCarro como prototype do obj Carro
Carro.prototype = equipamentosDoCarro;

let fusca = new Carro("VW");

console.log(equipamentosDoCarro.isPrototypeOf(fusca)); // true
