// Funções podem ter o tipo do retorno tipados

//function nome (param1: tipo  , param2: tipo  ): tipo do return {}
function exemplo(param1: number, param2: number): number {
	return param1 + param2;
}
console.log(exemplo(2, 2)); // 4

// em JS, seria concatenado, porém em TS dará erro
// console.log(exemplo(2, "3")); Argument of type 'string'...

function cumprimento(saudacao: string, nome: string): string {
	return `Olá, ${saudacao} ${nome}, tudo bem?`;
}

console.log(cumprimento("Sr", "Eduardo")); // Olá, Sr Eduardo, tudo bem?
// console.log(cumprimento(4, 2)); // ERRO
