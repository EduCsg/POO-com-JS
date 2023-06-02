// Generics criam um componente sem especificar um tipo de dado
// Podem ser reutilizados
// Trabalha como se fosse um "Placeholder" para o type, que será
// preenchido durante a execução

function identity<T>(arg: T): T {
	console.log(typeof arg);

	return arg;
}

identity("a"); // string
identity(3); // number
identity(false); // boolean
identity(undefined); // undefined

// apesar de ser um generic, pode ser definido um tipo de dado
// para ocupar o parametro genérico

identity<string>("a"); // string
// identity<number>("b"); // ERRO
identity<number>(3); // number

// assim se torna possível reutilizar a mesma função diversas vezes, mas
// sem perder a funcionalidade de definir o tipo do dado passado

// ou pode também ser alterado apenas o tipo de Return

function teste<T>(arg: any): T {
	console.log(typeof arg + " 2");

	return arg.toString();
}

teste("a"); // string 2
teste(3); // number 2
teste(false); // boolean 2
