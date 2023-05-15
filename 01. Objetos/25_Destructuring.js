// Criar diversas variáveis com apenas uma linha
// Serve também para separar variáveis vindas de um objeto

let carro = {
	portas: 4,
	aro: 20,
	cor: "Preto",
	tetoSolar: true,
};

// Recebe os valores vindos de dentro do obj Carro
let { portas, aro, cor, tetoSolar } = carro;

console.log(portas); // 4
console.log(aro); // 20
console.log(cor); // Preto
console.log(tetoSolar); // true

console.log(carro); // { portas: 4, aro: 20, cor: 'Preto', tetoSolar: true }
