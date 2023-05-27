/*
  Uma forma ainda mais limpa de realizar o processo é copiando as propriedades
    através de um loop para conseguir editar apenas no filho, sem afetar o pai
    
  Para fazer isso, utilizaremos a prop Uber, que dará possibilidade de acessar
    a propriedade do Pai */

function extend(Filho, Pai) {
	// Fake Function antiga
	// let F = function () {};
	// F.prototype = Pai.prototype;
	// Filho.prototype = new F();
	//
	//
	// Formato de Loop
	let paiProto = Pai.prototype;
	let filhoProto = Filho.prototype;

	for (let i in paiProto) {
		filhoProto[i] = paiProto[i];
	}

	// filho tem acesso ao obj pai
	filhoProto.uber = paiProto;
}

// Constructor Veiculo
function Veiculo() {}
Veiculo.prototype.carenagem = "aço";
Veiculo.prototype.ligar = function () {
	console.log(`O Veículo ligou!`);
};

// Constructor Trem
function Trem(tipo) {
	this.tipo = tipo;
}
Trem.prototype.vagoes = 50;

// Constructor Carro
function Carro(tipo) {
	this.tipo = tipo;
}
Carro.prototype.pneus = 4;

Trem.prototype = Veiculo.prototype;
// Carro.prototype = Veiculo.prototype;

// Construtor temporário por função
extend(Trem, Veiculo);
extend(Carro, Veiculo);

let tremBala = new Trem("Trem bala");
let tremNormal = new Trem("Trem normal");

let ferrari = new Carro("Ferrari");

Carro.prototype.ligar = function () {
	console.log(`O carro ligou na linha 48!`);
};

Trem.prototype.ligar = function () {
	console.log(`O Trem ligou na linha 52!`);
};

tremBala.ligar(); // O Trem ligou na linha 63!
tremNormal.ligar(); // O Trem ligou na linha 63!
ferrari.ligar(); // O carro ligou na linha 59!

console.log(tremBala); // Veiculo { tipo: 'Trem bala' }

// Caso seja alterado algum metodo do pai agora,
// o filho não será afetado

Veiculo.prototype.carenagem = "fibra de carbono";

console.log(tremBala.carenagem);
/* No HTML, será retornaro que a Carenagem é Aço,
    Porém existe uma propriedade dentro do objeto Trem
    que é chamada Uber, onde terá o valor de
    carenagem: fibra de carbono */
