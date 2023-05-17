/*
Pode ser criado com o new
Tem a propriedade length, que retorna o numero de caracteres

Podemos acessar os caracteres de uma string pelo
  índice, como se fosse um array */

let a = new String("abc");
let b = "defff";

// Letra no índice 0
console.log(a.charAt(0), b.charAt(0)); // a d

// Código da letra no índice 0
console.log(a.charCodeAt(0), b.charCodeAt(0)); // 97 100

// Concatenação de strings
console.log(a.concat(b)); // abcdefff

// Verifica o índice do primeiro argumento mencionado
console.log(a.indexOf("b"), b.indexOf("f")); // 1 2

// Ou do texto mencionado
console.log(a.indexOf("ab"), b.indexOf("ef")); // 0 1

// Verifica o índice da última aparição do argumento mencionado
console.log(a.lastIndexOf("b"), b.lastIndexOf("f")); // 1 2

console.log(a.toUpperCase()); // ABC
console.log(b.toLowerCase()); // defff
