/*
Object é o pai de todos os objetos, todo objeto herda de Object
Pode ser criado um objeto vazio, ou com propriedades via New */

let o1 = {};
let o2 = new Object();

console.log(o1); // {}
console.log(o2); // {}

// Ou seja, mesmo que não tenha nada dentro, o objeto já existe e é herdado de Object

o1.nome = "Eduardo";
o2.nome = "Teste";

console.log(o1.valueOf()); // { nome: 'Eduardo' }
console.log(o2.valueOf()); // { nome: 'Teste' }

console.log(typeof o1); // object
console.log(typeof o2); // object
