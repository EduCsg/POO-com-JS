/*
  Caso seja utilizada a técnica do construtor temporário, surgirá
    um problema pois será necessario criar uma function temporária para
    todas as classes que herdam de uma outra classe
    
  Para evitar esse problema, podemos isolar a herança termporária em uma função
    e reutilizá-la diversas vezes */

function extend(Filho, Pai) {
	// Criamos uma function vazia e copiamos o prototype de Veiculo para a função F
	let F = function () {};
	F.prototype = Pai.prototype;
	Filho.prototype = new F();
}

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

// Construtor temporário por função
extend(Trem, Veiculo);
extend(Carro, Veiculo);

let tremBala = new Trem("Trem bala");
let tremNormal = new Trem("Trem normal");

let ferrari = new Carro("Ferrari");

Carro.prototype.ligar = function () {
	console.log(`O carro ligou na linha 48!`);
};

Trem.prototype.ligar = function () {
	console.log(`O Trem ligou na linha 52!`);
};

tremBala.ligar(); // O Trem ligou na linha 52!
tremNormal.ligar(); // O Trem ligou na linha 52!
ferrari.ligar(); // O carro ligou na linha 48!
