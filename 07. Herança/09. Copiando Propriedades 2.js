/* Mesmo dando a volta por cima com o método do Loop
    ao copiar propriedades, é possível que seja encontrado
    um problema ao tentar copiar um array, pois na verdade
    ele criará uma referência ao array original e não
    copiará para um novo
    
  O array original já está com espaço alocado dentro da
    memória, ao tentar realizar o método do loop, tudo
    que vai acontecer é ser criada uma referência para 
    o espaço já alocado do array, sem copiar nada e
    alterando sempre o elemento original */

function extend(Filho, Pai) {
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
function Veiculo() {
	this.carenagem = "aço";
	this.itens = ["volante", "banco", "cinto"];
	this.ligar = function () {
		console.log(`O Veículo ligou!`);
	};
}

// Constructor Trem
function Trem(tipo) {
	this.tipo = tipo;
	this.vagoes = 50;
}

// Constructor Carro
function Carro(tipo) {
	this.tipo = tipo;
	this.pneus = 4;
}

// Nesse caso, não quero que o veiculo tenha trilhos, apenas o trem
// Trem.prototype.itens.push("trilhos");

let tremBala = new Trem("Trem bala");
let tremNormal = new Trem("Trem normal");
let ferrari = new Carro("Ferrari");

console.log(tremNormal);
// No HTML, será retornado o seguinte:

// Veiculo {
// tipo: 'Trem normal',
// itens: [ 'volante', 'banco', 'cinto', 'trilhos' ]
// }

// Porém, no objeto Ferrari também foi adicionado "trilhos" ao array

// Para resolver isso, será necessário realizar um Object clone
// que se trata de uma junção de função construtora fictícia com o método do loop

// Porém, na maoiria dos casos é mais fácil utilizar um novo objeto ou alterar
// o objeto original, pois a função se torna extensa e complexa

// function objectClone (Obj que vai ser clonado, novo Obj)
function objectClone(o, stuff) {
	let n;
	function F() {}
	F.prototype = o;
	n = new F();

	n.uber = o;

	for (let i in stuff) {
		n[i] = stuff[i];
	}

	return n;
}

// Além disso tudo, as propriedades prototype são declaradas dentro
// da constructor function (linha 27)

let v = new Veiculo();
let trem = objectClone(v, {
	tipo: "Trem",
	vagoes: 50,
});

// console.log(trem);
/*
Veiculo {
  uber: Veiculo {
    carenagem: 'aço',
    itens: [ 'volante', 'banco', 'cinto' ],
    ligar: [Function (anonymous)]
  },
  tipo: 'Trem',
  vagoes: 50
} */

trem.itens.push("trilhos");

console.log(trem); /*
Veiculo {
  uber: Veiculo {
    carenagem: 'aço',
    itens: [ 'volante', 'banco', 'cinto', 'trilhos' ],
    ligar: [Function (anonymous)]
  },
  tipo: 'Trem',
  vagoes: 50
} */

let carro = new Veiculo();
console.log(carro.itens); // [ 'volante', 'banco', 'cinto' ]

/* Ou seja, foi alterado apenas no objeto
    criado para ser referenciado ao Trem */
