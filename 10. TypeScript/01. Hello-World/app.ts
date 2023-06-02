function HelloWorld(nome: string) {
	// o tipo do param nome terá q ser string
	console.log(`Hello world! ${nome}`);
}

let nome2 = 2;
// HelloWorld(nome2); -> Argument of type 'number' is not assignable to parameter of type 'string'.

let nome3 = "teste";
HelloWorld(nome3);

// Rodar no terminal
// tsc app.ts
