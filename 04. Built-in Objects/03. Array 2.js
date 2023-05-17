let a = [0, 1, 2];
let b = new Array(3, 4, 5);

// Mostra o tanto de itens dentro do array
console.log(a.length); // 3
console.log(b.length); // 3

// Adiciona um item no final do array
a.push(3);
b.push(6);

console.log(a); // [ 0, 1, 2, 3 ]
console.log(b); // [ 3, 4, 5, 6 ]

// Remove o ultimo item do array
a.pop();
b.pop();

console.log(a); // [ 0, 1, 2 ]
console.log(b); // [ 3, 4, 5 ]
