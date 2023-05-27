/**
  Um dos problemas de clonar um Prototype e criar uma Chain,
    é gerar um side effect.

  Um desses efeitos colaterais é a alteração de propriedades,
    pois como está sendo gerada apenas uma referência, se houver
    alteração dentro do elemento filho, a propriedade dentro do Pai
    também será alterada.

  Devido à isso, é recomendado utilizar o prototype apenas para coisas
    que não serão alteradas em nenhuma ocasião */

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

Trem.prototype = Veiculo.prototype;
Carro.prototype = Veiculo.prototype;

let tremBala = new Trem("Trem bala");
let tremNormal = new Trem("Trem normal");
let ferrari = new Carro("Ferrari");

// Mesmo alterando apenas no objeto Carro, a propriedade do obj Trem
// também foi alterada, pois o prototype se trata apenas de uma referência
// a propriedade
Carro.prototype.ligar = function () {
	console.log(`O carro ligou!`);
};

tremBala.ligar(); // O carro ligou!
tremNormal.ligar(); // O carro ligou!
ferrari.ligar(); // O carro ligou!
