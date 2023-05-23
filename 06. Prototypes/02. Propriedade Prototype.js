/*
As funções, além das propriedades e métodos, também
  herdam a propriedade Prototype já criada */

// Exemplo 1

function Pessoa(nome, idade) {
	this.nome = nome;
	this.idade = idade;
}

Pessoa.prototype.andar = function () {
	return this.nome + " andou";
};

Pessoa.prototype.teste = 1;

const andre = new Pessoa("André", 28);

console.log(Pessoa.prototype); // { andar: [Function (anonymous)], teste: 1 }
console.log(andre); // Pessoa { nome: 'André', idade: 28 }

console.log(andre.prototype); // undefined
console.log(andre.andar()); // André andou

function Person(name) {
	this.name = name;
}

Person.sayHello = function () {
	console.log("Hello " + this.name);
};

Person.prototype.sayHi = function () {
	console.log("Hi " + this.name);
};

var p1 = new Person("Fulano");

p1.sayHello(); // Erro: sayHello não está definido
p1.sayHi(); // "Hi Fulano"
