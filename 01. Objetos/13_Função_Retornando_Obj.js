function criarCarro(modelo, portas, aro, tetoSolar) {
	return {
		modelo: modelo,
		portas: portas,
		aro: aro,
		tetoSolar: tetoSolar,

		//methods
		ligarCarro() {
			console.log("Ligou!");
		},

		temTetoSolar() {
			this.tetoSolar
				? console.log("Tem teto solar!")
				: console.log("Não tem teto solar!");
		},
	};
}

let ferrari = criarCarro("Ferrari", 4, 18, true);
console.log(ferrari);
/* {
  modelo: 'Ferrari',
  portas: 4,
  aro: 18,
  tetoSolar: true,
  ligarCarro: [Function: ligarCarro],
  temTetoSolar: [Function: temTetoSolar]
} */

ferrari.ligarCarro(); // Ligou!
ferrari.temTetoSolar(); // Tem teto solar!

let bmw = criarCarro("BMW", 2, 16, false);

console.log(bmw);
/* {
  modelo: 'BMW',
  portas: 2,
  aro: 16,
  tetoSolar: false,
  ligarCarro: [Function: ligarCarro],
  temTetoSolar: [Function: temTetoSolar]
} */
