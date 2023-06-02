// Interfaces são utilizadas para definir a estrutura de um objeto ou funções,
// ou seja, quais propriedades e tipos de dados ele deve ter

// Pode ser feito dessa maneira
function imprimirDados(obj: { nome: string; idade: number }) {
	console.log(`${obj.nome} tem ${obj.idade} anos.`);
}

// torna assim, obrigatório o uso de nome e idade na chamada do obj
let Pessoa1 = { nome: "Eduardo", idade: 18 };
imprimirDados(Pessoa1); // Eduardo tem 18 anos.

let Pessoa2 = { nome: "João" };
// imprimirDados(Pessoa2); -> Argument of type '{ nome: string; }' is not assignable to parameter of type '{ nome: string; idade: number; }'.

// OU com interface

interface Usuario {
	nome: string;
	idade: number;
}

function ImprimirDados2(obj: Usuario) {
	console.log(`${obj.nome} tem ${obj.idade} anos.`);
}

let Pessoa3 = { nome: "teste", idade: 18 };
ImprimirDados2(Pessoa3); // teste tem 18 anos.

// Além disso, também é possível que sejam criados parâmetros opcionais
// com o uso do '?'

interface config {
	marca: string;
	aro?: number;
	tetoSolar: boolean;
	cor?: string;
}

function criarCarro(params: config): {
	marca: string;
	aro: number;
	tetoSolar: boolean;
	cor: string;
} {
	// valores default, caso o item não venha nos parametros
	let carro = { marca: "Default", aro: 16, tetoSolar: false, cor: "Preto" };

	// alteração dos valores caso venham nos params
	if (params.marca) {
		carro.marca = params.marca;
	}

	if (params.aro) {
		carro.aro = params.aro;
	}

	if (params.tetoSolar) {
		carro.tetoSolar = params.tetoSolar;
	}

	if (params.cor) {
		carro.cor = params.cor;
	}

	return carro;
}

let bmw = criarCarro({ marca: "BMW", tetoSolar: true });
// o aro e cor virão conforme o padrão
console.log(bmw); // { marca: 'BMW', aro: 16, tetoSolar: true, cor: 'Preto' }

let ferrari = criarCarro({
	marca: "Ferrari",
	tetoSolar: false,
	aro: 20,
	cor: "Vermelha",
});
// todos os dados são alterados na função
console.log(ferrari); // { marca: 'Ferrari', aro: 20, tetoSolar: false, cor: 'Vermelha' }
