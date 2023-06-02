// Outros tipos de dados são: Tuplas, Enum, Any, Void, Null e Undefined, Never, Object e Never

// Tuplas
// Tuplas
// Tuplas

// Os dados dentro do Array tem que ser do tipo especificado
let pessoa: [string, number, boolean] = ["Eduardo", 18, true];

console.log(pessoa); // [ 'Eduardo', 18, true ]

// Enum
// Enum
// Enum

// É um tipo de dado que define valores pré-definidos para uma variável
// ou seja, torna as variáveis Read-Only
enum Carro {
	Rodas = 4,
	Portas = 4,
	Motor = 1,
}

// Se tentarmos alterar, será retornado um erro
// Carro.Portas = 3 -> Cannot assign to 'Portas' because it is a read-only property.

// Para consultar, não há erros
let numeroDeMotores: Carro = Carro.Motor;
console.log(numeroDeMotores); // 1

// Any
// Any
// Any

// Any é um tipo de dado que aceita qualquer tipo de dado
// deve ser utilizado apenas em casos específicos
let aindaNaoSabe: any = "teste";

aindaNaoSabe = 1; // OK
aindaNaoSabe = true; // OK

// Void
// Void
// Void

// O Void é o contrário do Any, ele não aceita nenhum tipo de dado
// e é utilizado para funções que não retornam nada

// Exemplo de função que não retorna nada explicitamente
// (geralmente significa que ela retorna undefined implicitamente)
// e never sempre que uma função não retorna nada (nem undefined).
function printarNaTela(msg: string): void {
	console.log(msg);
}

printarNaTela("teste");

let testeVoid: void;

// testeVoid = 1; -> Cannot assign to 'testeVoid' because it is a constant or a read-only property.

// A única forma de atribuir valor ao Void é o undefined
testeVoid = undefined; // OK
