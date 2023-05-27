/*
  Realizar a adição de métodos diretamente em objetos
    nativos do JavaScript não é uma boa ideia por
    alguns motivos, como:

  - Caso a linguagem atualize e seja criado um método
    com o mesmo nome do customizado, o customizado
    será substituido pelo nativo.

  - Isso pode conflitar na lógica e leitura do programa
    por futuros desenvolvedores.

  Para evitar esse problema, é possível fazer uma checagem
    dentro dos métodos nativos do JS */

// Isso protege de futuras atualizaçoes da linguagem
if (typeof Array.prototype.checkLength !== "function") {
	Array.prototype.checkLength = function () {
		return this.length;
	};
}

let a = [1, 2, 3, 4, 5, 6];

console.log(a.checkLength()); // 6

if (typeof Array.prototype.join !== "function") {
	Array.prototype.join = function () {
		return this.length;
	};
}

// não será executada a função personalizada da linha 29, pois
// o if é falso e o método não foi inserido com sucesso
console.log(a.join());
