/*
  Mesmo com as propriedades e métodos abstraídos das Class e
  adicionados via Prototype, o resultado no fim será o mesmo.
  
  Isso significa que, se o Prototype for alterado, todos os
  objetos instanciados que herdaram as propriedades e métodos
  do Prototype também serão alterados.

  Significa também que ao adicionar via Prototype,
  haverá um consumo menor de memória, pois cada
  objeto instanciado terá uma cópia do Prototype.

  Por isso, é recomendado que as propriedades e métodos que
  serão compartilhados entre as classes sejam adicionados ao
  Prototype, e não ao objeto instanciado.
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

// Instancias de Veiculo
Trem.prototype = new Veiculo();
Carro.prototype = new Veiculo();

let tremBala = new Trem("Trem bala");
let tremNormal = new Trem("Trem normal");

let ferrari = new Carro("Ferrari");

tremNormal.ligar();
