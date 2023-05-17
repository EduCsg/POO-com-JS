/*
Pode ser criado com o new
Tem a propriedade length, que retorna o numero de caracteres

Podemos acessar os caracteres de uma string pelo
  índice, como se fosse um array */

let a = new String("abc");
let b = "def";

console.log(a, b); // [String: 'abc'] def

console.log(a.length, b.length); // 3 3

console.log(a[0], b[0]); // a d
