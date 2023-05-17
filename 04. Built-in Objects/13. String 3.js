/*
Pode ser criado com o new
Tem a propriedade length, que retorna o numero de caracteres

Podemos acessar os caracteres de uma string pelo
  índice, como se fosse um array */

let a = new String("abc");
let b = "defff";

// slice extorna os caracteres do índice inicial até o final e retorna
// o do meio
console.log(a.slice(1, 3), b.slice(1, 3)); // bc ef

// substring retorna os caracteres do índice inicial até o final e retorna
// o do meio
console.log(a.substring(1, 3), b.substring(1, 3)); // bc ef

// split retorna um array com os caracteres separados pelo argumento
console.log(a.split("b"), b.split("f")); // [ 'a', 'c' ] [ 'de', '', '' ]

// ou, para separar cada caracteres, passamos uma string vazia
console.log(a.split("")); // [ 'a', 'b', 'c' ]
