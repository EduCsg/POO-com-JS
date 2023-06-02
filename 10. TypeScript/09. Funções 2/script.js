// Parãmetros opcionais
// não é possível colocar parametros opcionais ANTES dos
// parametros obrigatorios
function descreverCarro(marca, aro) {
    if (aro) {
        console.log("O carro \u00E9 da marca ".concat(marca, " e tem aro ").concat(aro));
    }
    else {
        console.log("O carro \u00E9 da marca ".concat(marca));
    }
}
descreverCarro("BMW", 20); // O carro é da marca BMW e tem aro 20
descreverCarro("VW"); // O carro é da marca VW
