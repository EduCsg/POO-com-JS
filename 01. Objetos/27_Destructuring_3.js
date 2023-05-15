// O destructuring também pode ser utilizado em ARRAYS, não somente objetos

let frutas = ["banana", "laranja", "maçã"];

let [banana, l, m] = frutas;
console.log(banana, l, m); // banana laranja maçã
// pega de acordo com os índices dentro do array

let [b, k] = frutas;
console.log(b, k); // banana laranja
// não precisam ser chamados todos os índices presentes em um array,
// apenas os desejados
