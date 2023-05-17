/*
A propriedade length pode ser utilizada para saber o 
  número de argumentos de uma função */

function teste(a, b, c) {
	return a, b, c;
}

console.log(teste.length); // 3

function teste2(a, b, c, d) {
	return a, b, c, d;
}

console.log(teste2.length); // 4
