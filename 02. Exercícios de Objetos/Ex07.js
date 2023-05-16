// Crie dois objetos que compartilhem nomes de propriedades via object literals
// Uma variável deve definir a parte que se repete nas propriedades de um objeto

let n = "numero_de_";

let carro = {
	[n + "rodas"]: 4,
};

let moto = {
	[n + "rodas"]: 2,
};

let pessoa = {
	[n + "pernas"]: 2,
};

console.log(carro); // { numero_de_rodas: 4 }
console.log(moto); // { numero_de_rodas: 2 }
console.log(pessoa); // { numero_de_pernas: 2 }
