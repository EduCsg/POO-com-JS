/*
  Utilizar o prototype é uma boa prática
  
  Tendo isso em vista, é possível que seja copiado apenas o prototype sem
  ser necessário instanciar uma nova Classe 
 */

// Constructor Veiculo
function Veiculo() {}
Veiculo.prototype.carenagem = "aço";
Veiculo.prototype.ligar = function () {
	console.log(`O Veículo ligou!`);
};

// Constructor Trem
function Trem(tipo) {
	this.tipo = tipo;
}
Trem.prototype.vagoes = 50;

// Constructor Carro
function Carro(tipo) {
	this.tipo = tipo;
}
Carro.prototype.pneus = 4;

// Para gerar uma nova instância, ao invés de utilizar o NEW,
// Trem.prototype = new Veiculo();

// será gerada uma cópia do Prototype
Trem.prototype = Veiculo.prototype;
Carro.prototype = Veiculo.prototype;

let tremBala = new Trem("Trem bala");
let tremNormal = new Trem("Trem normal");

let ferrari = new Carro("Ferrari");

console.log(ferrari.carenagem);
