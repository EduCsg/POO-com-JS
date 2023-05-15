/*
Faz uma referenciação ao objeto original, porém caso seja alterado,
será alterado diretamente no obj original e não na "Cópia" dele
*/
let obj = {
	numero: 1,
};

console.log(obj); // { numero: 1 }

let copia = obj;

console.log(copia.numero); // 1
// O valor apresentado na copia é REFERENTE (não copiado)
// ao valor atribuido no objeto original

copia.numero = 5;

console.log(obj.numero); // 5
console.log(copia); // { numero: 5 }

obj.numero = 2;

console.log(copia); // { numero: 2 }
