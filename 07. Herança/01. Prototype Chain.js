/*
  * O Prototype Chain é a maneira "Default" da herança

  * Podemos instanciar um objeto a partir de outro
    objeto
    
  * O objeto instanciado herda todas as propriedades e
    métodos do objeto que foi instanciado  */

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

// Prototype Chain
// Está sendo criada uma instância de Veículo dentro
// de Trem
Trem.prototype = new Veiculo();

let trem = new Trem("Trem bala");

console.log(trem); // Veiculo { tipo: 'Trem bala', vagoes: 50 }

// O objeto instanciado herda todas as propriedades e
// métodos do objeto que foi instanciado
trem.ligar(); // O Veículo ligou!

function Carro() {
	this.pneus = 4;
}

Carro.prototype = new Veiculo();
let ferrari = new Carro();

ferrari.ligar(); // O Veículo ligou!

/*
O que foi feito nesse arquivo é a criação de 3 classes
  - Veiculo
  - Trem
  - Carro

A classe Pai é a Veiculo, onde incluir propriedades que
se aplicam tanto ao trem quanto ao carro

as classes Trem e Carro são filhas de Veiculos, pois
além de herdar as propriedades padrão, também existem
suas particularidades

O trem, além de ser feito de Aço, também tem um tipo
e uma quantidade de vagões

O carro, além de ser feito de Aço, também tem 4 pneus

Porém os dois ligam da mesma forma, por isso o método
ligar() está na classe Veiculo */
