// podemos também criar propriedades com variáveis ou retorno de funções

// além da facilidade na declaração das variáveis, é possível também
// declarar um METHOD sem utilizar FUNCTION

let rodas = 4;
let portas = 4;
let aro = 20;
let tetoSolar = true;

const tipo = "tipo_de_";

let carro = {
	rodas,
	portas,
	aro,
	tetoSolar,
	bancoDeCouro: true,

	// metodo antigo
	// tipo_de_carro: "Sedan",
	[tipo + "carro"]: "Sedan",
};

console.log(carro.tipo_de_carro); // Sedan

let barco = {
	// tipo_de_barco: "Lancha",
	[tipo + "barco"]: "Lancha",
};
console.log(barco.tipo_de_barco); // Lancha

let aviao = {
	// tipo_de_aviao: "Boeing",
	[tipo + "aviao"]: "Boeing",
};
console.log(aviao.tipo_de_aviao); // Boeing
