// Crie um objeto com 3 propriedades
// 1 - Uma String
// 2 - Um Number
// 3 - Um Boolean

let obj = {
	nome: "Eduardo", // String
	idade: 18, // Number
	maiorDeIdade: true, // Boolean

	arr: ["item1", "item2", "item3"], // Array

	obj2: {
		a: "a",
		b: 2,
		c: false,
	}, // Objeto
};

console.log(obj.nome, obj.idade, obj.maiorDeIdade); // Eduardo 18 true

console.log(obj.obj2); // { a: 'a', b: 2, c: false }
