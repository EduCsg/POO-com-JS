// Pode ser utilizado também para alterar valor de variáveis já criadas

let carro = {
	portas: 4,
	aro: 20,
	cor: "Preto",
	tetoSolar: true,
};

let portas = 0;
console.log(portas); // 0

// Altera o valor da LET Portas para o valor recebido da variável
// com o mesmo nome vinda do objeto CARRO
({ portas } = carro);
console.log(portas); // 4

let portas2 = 0;
console.log(portas2); // 0

// Vai tentar puxar o valor de portas2 vindo do obj carro
({ portas2 } = carro);
console.log(portas2); // undefined
// retornou undefined pois não encontrou a variável dentro do obj
// e alterou o valor da let já existente para o recebido ao acessar o obj

({ portas3 } = carro); // Erro de sintaxe, pois a variável não é existente
