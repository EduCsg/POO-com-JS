let frutas: string[] = ["teste1"];

frutas.push("teste2");
// frutas.push(5); -> Argument of type 'number' is not assignable to parameter of type 'string'.

const numeros: Array<Number> = [1, 2, 3, 4, 5];

console.log(frutas); // ['teste1', 'teste2']
console.log(numeros); // [1, 2, 3, 4, 5]

let obj = {
	name: "Eduardo",
	idade: 18,
};

console.log(obj); // { name: 'Eduardo', idade: 18 }
