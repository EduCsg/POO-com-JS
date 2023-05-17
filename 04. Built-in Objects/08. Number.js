/*
Number também se trata de um objeto e pode ser instanciado com o
  new, porém não existe necessidade

Number possui métodos e propriedades

Number possui métodos estáticos, que são acessados diretamente
  pela classe, sem a necessidade de instanciar um objeto */

let a = 2;
let b = new Number(3);

console.log(a, b); // 2 [Number: 3]
console.log(a.valueOf(), b.valueOf()); // 2 3

let c = 12.545;

// Mesmo resultado
console.log(Number.parseInt(c)); // 12
console.log(parseInt(c)); // 12

let d = 123.125124;

// Mesmo resultado
console.log(Number.parseFloat(d)); // 123.125124
console.log(parseFloat(d)); // 123.125124
