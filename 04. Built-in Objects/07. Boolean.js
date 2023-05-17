/*
Também pode ser instanciado com o new, porém não existe necessidade

Não possui métodos, apenas propriedades

Serve para TRUE ou FALSE apenas */

let a = true;
let b = new Boolean(false);

console.log(a); // true
console.log(b); // [Boolean: false]
console.log(b.valueOf()); // false

console.log(typeof a); // boolean
console.log(typeof b); // object

console.log(a instanceof Boolean); // false
console.log(b instanceof Boolean); // true
