function Carro(marca, preco) {
	this.marca = marca;
	this.preco = preco;
}

Carro.prototype.rodas = 4;
// Essa proriedade é da Classe, não do objeto

let bmw = new Carro("BMW", 100000);

console.log(Carro); // [Function: Carro]
console.log(bmw); // Carro { marca: 'BMW', preco: 100000 }

console.log(Carro.rodas); // undefined
console.log(bmw.rodas); // 4

// Com isso é possível utilizar regras de negócio
// e adicionar métodos ao prototype de funções
// de acordo com a necessidade do projeto

// exemplo
// Quantas rodas tem seu carro?
// resposta = 4

// Carro.prototype.rodas = resposta;
// console.log(bmw.rodas) // 4
