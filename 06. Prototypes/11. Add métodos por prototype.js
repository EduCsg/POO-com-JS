// Está sendo adicionada a função checkLength ao objeto Array,
// ou seja, tudo que houver herança do obj Array terá acesso
// à essa função

Array.prototype.checkLength = function () {
	return this.length;
};

// Por ser um array, por padrão a variável "a"
// será herdada do objeto Array
let a = [1, 2, 3, 4, 5, 6];

console.log(a.checkLength()); // 6

let b = [124, 1, 25, 12, 412, 3, 15, 12, 3, 123];
console.log(b.checkLength());

// Outro exemplo:
Array.prototype.somaDois = function () {
	return `A soma de ${this[0]} e ${this[1]} é ${this[0] + this[1]}`;
};

console.log(b.somaDois()); // A soma de 124 e 1 é 125
