/*
A function também é herdada de Object

Não se deve usar o construtor new Function() para criar uma função,
pois ele não é seguro, não é performático e complica o código  */

function teste(a) {
	return a;
}

console.log(teste("Olá!")); // Olá!

/*   NÃO USAR   | */
/*   NÃO USAR   | */
/*   NÃO USAR   V */

teste2 = new Function("b", "return b;");

console.log(teste2("Olá!")); // Olá!
