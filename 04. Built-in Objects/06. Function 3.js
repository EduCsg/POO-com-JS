/*
Os métodos que podemos utilizar na função são Call e Apply

- Call
	- Pega métodos de outras funções e aplica na função atual
	- O primeiro argumento é o contexto da função
	- Os demais argumentos são os argumentos da função

- Apply
	- Pega métodos de outras funções e aplica na função atual, mas todos
		os métodos são passados em um array
	- O primeiro argumento é o contexto da função
	- O segundo argumento é um array com os argumentos da função */

let a = {
	nome: "Lucas",

	dizerNome() {
		console.log(`O nome do objeto é ${this.nome}`);
	},
};

a.dizerNome(); // O nome do objeto é Lucas

let b = {
	nome: "João",
};

a.dizerNome.call(b); // O nome do objeto é João

let c = {
	nome: "Maria",
};

a.dizerNome.call(c); // O nome do objeto é Maria
