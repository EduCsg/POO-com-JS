// Para copiar propriedades, utilizamos o método ASSIGN

let pessoa1 = {
	nome: "Eduardo",
};

let pessoa2 = {
	nome: "vazio",
	age: 18,
};

console.log(pessoa1, pessoa2); // { nome: 'Eduardo' } { nome: 'vazio', age: 18 }

Object.assign(pessoa2, pessoa1);
// Funciona igualmente para methods e functions

console.log(pessoa1, pessoa2); // { nome: 'Eduardo' } { nome: 'Eduardo', age: 18 }

console.log(pessoa2); // { nome: 'Eduardo', age: 18 }

console.log(pessoa1 === pessoa2); // false
