console.log(window);
// um milao de infos, inclusive as
// variáveis de escopo global (LET não funfa)
// functions tbm, etc...

var teste = "teste";

// TODAS variáveis sempre estarão dentro do objeto Window,
// por isso, o this.teste funcionará normalmente

console.log(teste); // teste
console.log(window.teste); // teste
console.log(this.teste); // teste
