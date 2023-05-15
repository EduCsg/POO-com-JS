// Para comparar objetos, utilizaremos o método IS
// Basicamente o mesmo resultado de usar "==="
// Exceto para NaN e +0 -0 (que no IS são considerados iguais)

let teste = {
	a: 1,
};

let teste2 = {
	a: 1,
};

console.log(Object.is(teste, teste2)); // False (são objetos diferentes!)

console.log(Object.is(NaN, NaN)); // True
console.log(NaN === NaN); // False

console.log(Object.is(+0, -0)); // False
console.log(+0 === -0); // True

let teste3 = teste;

console.log(Object.is(teste, teste3)); // True
console.log(teste === teste3); // True
