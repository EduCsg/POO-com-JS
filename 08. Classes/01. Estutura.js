/*
  A declaração de uma class é dada pela palavra reservada Class, além disso,
    o uso da primeira letra maiúscula é uma convenção para classes.

  Dentro da Class sempre será encontrada a função Constructor() {}, onde é 
    possível definir os atributos iniciais da classe
    (como se fosse a function que estava sendo utilizada no módulo anterior). */

class Humano {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}
}

console.log(typeof Humano); // function

let matheus = new Humano("Matheus", 18);

console.log(matheus); // Humano { nome: 'Matheus', idade: 18 }
