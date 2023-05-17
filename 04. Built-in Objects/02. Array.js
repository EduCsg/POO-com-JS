/*
Array é um objeto pai de todos Arrays, todo Array herda de Array
Possui propriedades e métodos específicos para Arrays */

let a = [0, 1, 2];
let b = new Array(3, 4, 5);

console.log(a); // [ 0, 1, 2 ]
console.log(b); // [ 3, 4, 5 ]

console.log(a.toString()); // 0,1,2
console.log(b.toString()); // 3,4,5

console.log(a instanceof Array); // true
console.log(b instanceof Array); // true

console.log(a instanceof Object); // true
console.log(b instanceof Object); // true
// True porque um arr é herdade de Array, que herda de Object
// Ou seja, o pai do pai dele é o Object
