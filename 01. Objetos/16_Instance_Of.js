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
// Mostra qual a função que está gerando o objeto

console.log(laranjeira instanceof criarArvore);
// false, pois a função criarArvore não é pai do objeto LARANJEIRA

console.log(laranjeira instanceof Object);
// true

console.log(Jaspion instanceof Heroi);
// true, pois a palavra 'NEW' diz que está sendo gerado um novo objeto
// seguindo a classe HEROI

console.log(obj instanceof Object);
// true, pois é originado "do nada", sem ter um pai específico

let arr = [];

console.log(arr instanceof Array);
// true

/*
TUDO QUE SAI DO NADA, É ORIGINADO DO PAI NATIVO DO JS
TUDO QUE VEM DE ALGUM LUGAR, É UMA INSTÂNCIA DELE
*/
