/*
  Herança múltipla
  
  A herança múltipla é a capacidade de um objeto herdar de múltiplos objetos

  Em outras linguagens, é possível realizar a herança múltipla, porém no JS não é possível
    por padrão, pois o JS não possui classes, apenas objetos

  O que é possível fazer é criar um objeto que herda de outro objeto, e esse objeto
    herdar de outro objeto, e assim por diante (Herança em cadeia) */

function multi() {
	let n = {},
		stuff,
		j = 0,
		len = arguments.length;

	for (j = 0; j < len; j++) {
		stuff = arguments[j];
		for (let i in stuff) {
			if (stuff.hasOwnProperty(i)) {
				n[i] = stuff[i];
			}
		}
	}
	return n;
}

let pneu = {
	material: "borracha",
};

let aro = {
	tamanho: 17,
};

let pneuMontado = multi(pneu, aro);

let cor = {
	cor: "preto",
};

let pneuMontado2 = multi(pneu, aro, cor);

console.log(pneuMontado);
// { material: 'borracha', tamanho: 17 }

console.log(pneuMontado2);
// { material: 'borracha', tamanho: 17, cor: 'preto' }
