// Crie um objeto que tenha características de um caminhão e coloque em propriedades distintas
// Com o destructuring, coloque essas propriedades em variáveis separadas

let caminhao = {
	rodas: 6,
	motor: "V8",
	ano: 2010,
};

let { rodas, motor, ano } = caminhao;

console.log(rodas); // 6
console.log(motor); // V8
console.log(ano); // 2010
