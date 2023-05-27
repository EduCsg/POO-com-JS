/*

  Prototype Chain se trata de uma corrente de protótipos,
    onde um objeto pode herdar propriedades e métodos de
    outros objetos, formando uma corrente

  Por exemplo
    Veiculo -> Carro -> Ferrari -> Ferrari 458

  Ferrari 458 terá todas as propriedades e métodos de
    Ferrari, que por sua vez terá todas as propriedades
    e métodos de Carro, que por sua vez terá todas as
    propriedades e métodos de Veiculo */

// Constructor Veiculo
function Veiculo() {
	this.carenagem = "aço";
	this.ligar = function () {
		console.log(`O Veículo ligou!`);
	};
}

// Constructor Trem
function Trem(tipo) {
	this.tipo = tipo;
	this.vagoes = 50;
}

// Constructor Carro
function Carro(tipo) {
	this.tipo = tipo;
	this.pneus = 4;
}

// Instancias de Veiculo
Trem.prototype = new Veiculo();
Carro.prototype = new Veiculo();

let tremBala = new Trem("Trem bala");
let ferrari = new Carro("Ferrari");

console.log(tremBala instanceof Trem); // true
console.log(ferrari instanceof Carro); // true

console.log(tremBala instanceof Carro); // false
console.log(ferrari instanceof Trem); // false

console.log(tremBala instanceof Veiculo); // true
console.log(ferrari instanceof Veiculo); // true

console.log(tremBala instanceof Object); // true
console.log(ferrari instanceof Object); // true
