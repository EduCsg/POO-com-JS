/*
RegExp é uma expressão regular

RegExp são comummente utilizadas para encontrar padrões
em textos e substituir partes de strings

São criadas utilizando duas barras: // 

regex != regexp */

let palavra = new RegExp(/ap/);

console.log(palavra.test("aplicativo")); // true
console.log(palavra.test("bola")); // false
