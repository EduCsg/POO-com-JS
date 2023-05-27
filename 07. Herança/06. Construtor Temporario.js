/*
  Para evitar o problema relatado anteriormente (05), basta fazer uma função
    construtora temporária.
    
  Ela serve para realizar o armazenamento para a referência e não será
    mais utilizada durante o código.

  Ao alterar a propriedade no filho, teoricamente seria alterado também no pai,
    porém como a referência se trata de uma construtora "Fictícia",
    não será alterada a Class original que o obj herda 
    
  O que é realizado na verdade é
  
  Class -> Constructor temp -> obj

  O obj alterará o constructor temporário e não afetará a class */

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
// Carro.prototype = Veiculo.prototype;

// Criamos uma function vazia e copiamos o prototype de Veiculo para a função F
let F = function () {};
F.prototype = Veiculo.prototype;

let tremBala = new Trem("Trem bala");
let tremNormal = new Trem("Trem normal");

Carro.prototype = new F();

let ferrari = new Carro("Ferrari");

Carro.prototype.ligar = function () {
	console.log(`O carro ligou!`);
};

tremBala.ligar(); // O Veículo ligou!
tremNormal.ligar(); // O Veículo ligou!
ferrari.ligar(); // O carro ligou!
