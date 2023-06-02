// Interfaces são utilizadas para definir a estrutura de um objeto ou funções,
// ou seja, quais propriedades e tipos de dados ele deve ter
// Pode ser feito dessa maneira
function imprimirDados(obj) {
    console.log("".concat(obj.nome, " tem ").concat(obj.idade, " anos."));
}
// torna assim, obrigatório o uso de nome e idade na chamada do obj
var Pessoa1 = { nome: "Eduardo", idade: 18 };
imprimirDados(Pessoa1); // Eduardo tem 18 anos.
var Pessoa2 = { nome: "João" };
function ImprimirDados2(obj) {
    console.log("".concat(obj.nome, " tem ").concat(obj.idade, " anos."));
}
var Pessoa3 = { nome: "teste", idade: 18 };
ImprimirDados2(Pessoa3); // teste tem 18 anos.
function criarCarro(params) {
    // valores default, caso o item não venha nos parametros
    var carro = { marca: "Default", aro: 16, tetoSolar: false, cor: "Preto" };
    // alteração dos valores caso venham nos params
    if (params.marca) {
        carro.marca = params.marca;
    }
    if (params.aro) {
        carro.aro = params.aro;
    }
    if (params.tetoSolar) {
        carro.tetoSolar = params.tetoSolar;
    }
    if (params.cor) {
        carro.cor = params.cor;
    }
    return carro;
}
var bmw = criarCarro({ marca: "BMW", tetoSolar: true });
// o aro e cor virão conforme o padrão
console.log(bmw); // { marca: 'BMW', aro: 16, tetoSolar: true, cor: 'Preto' }
var ferrari = criarCarro({
    marca: "Ferrari",
    tetoSolar: false,
    aro: 20,
    cor: "Vermelha",
});
// todos os dados são alterados na função
console.log(ferrari); // { marca: 'Ferrari', aro: 20, tetoSolar: false, cor: 'Vermelha' }
