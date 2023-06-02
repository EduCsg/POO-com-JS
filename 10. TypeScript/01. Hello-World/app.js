function HelloWorld(nome) {
    // o tipo do param nome terá q ser string
    console.log("Hello world! ".concat(nome));
}
var nome2 = 2;
// HelloWorld(nome2); -> Argument of type 'number' is not assignable to parameter of type 'string'.
var nome3 = "teste";
HelloWorld(nome3);
// Rodar no terminal
// tsc app.ts
