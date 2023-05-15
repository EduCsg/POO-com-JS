// Função introduzida no ES6, facilita na maneira de criar objetos

let x = 1;
let y = 2;

let obj = { x, y };
// automaticamente puxa os valores de X e Y para o nome da variável, dispensando
// a necessidade de fazer o { this.x = x }

console.log(obj.x); // 1;

obj.x = 4;
obj.y = 3;

console.log(obj); //{ x: 4, y: 3 }

let rodas = 4;
let portas = 4;
let aro = 20;
let tetoSolar = true;

let carro = {
	rodas,
	portas,
	aro,
	tetoSolar,
};

console.log(carro); // { rodas: 4, portas: 4, aro: 20, tetoSolar: true }

// OU
// OU
// OU
// OU

function carroFunction(rodas, portas, aro, tetoSolar) {
	return {
		rodas: rodas,
		portas: portas,
		aro: aro,
		tetoSolar: tetoSolar,
	};
}

let carro2 = new carroFunction(rodas, portas, aro, tetoSolar);

console.log(carro2); // { rodas: 4, portas: 4, aro: 20, tetoSolar: true }
