function criarArvore(especie, temFruto) {
	return {
		especie: especie,
		temFruto: temFruto,
	};
}

let laranjeira = criarArvore("Laranjeira", true);
console.log(laranjeira); // { especie: 'Laranjeira, temFruto: true }

console.log(laranjeira.constructor); // function ()

function Heroi(nome, classe) {
	this.nome = nome;
	this.classe = classe;
}

let Jaspion = new Heroi("Jaspion", "robô");

console.log(Jaspion); // Heroi { nome: 'Jaspion', classe: 'robô' }

console.log(Jaspion.constructor);
/*  ƒ Heroi(nome, classe) {
      this.nome = nome;
      this.classe = classe;
    }   
*/

let obj = {
	teste: "teste",
};

console.log(obj.constructor);
