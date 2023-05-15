// O destructuring também pode ser utilizado utilizando os Rest Operators

// array com N elementos
let arr = [1, 3, 56, 61, 12, 42, 5, 87, 99, "asd", "das", 355];

// nesse caso, serão pego os dois primeiros itens respectivamente nas
// variáveis A e B e todos outros serão na C
let [a, b, ...c] = arr;

console.log(a); // 1
console.log(b); // 3
console.log(c);
// [
//   56,  61,    12,
//   42,  5,     87,
//   99,  'asd', 'das',
//   355
// ]
