let pessoa = {
	nome: "Eduardo",
};

console.log(pessoa); // { nome: 'Eduardo' }

pessoa.idade = 18;

console.log(pessoa); // { nome: 'Eduardo', idade: 18 }

if (pessoa.idade >= 18) {
	pessoa.podeDirigir = true;
} else {
	pessoa.podeDirigir = false;
}

console.log(pessoa); // { nome: 'Eduardo', idade: 18, podeDirigir: true }

pessoa.falar = function () {
	console.log("falei!");
};

pessoa.falar(); // falei!
