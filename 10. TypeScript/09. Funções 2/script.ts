// Parãmetros opcionais

// não é possível colocar parametros opcionais ANTES dos
// parametros obrigatorios
function descreverCarro(marca: string, aro?: number) {
	if (aro) {
		console.log(`O carro é da marca ${marca} e tem aro ${aro}`);
	} else {
		console.log(`O carro é da marca ${marca}`);
	}
}

descreverCarro("BMW", 20); // O carro é da marca BMW e tem aro 20
descreverCarro("VW"); // O carro é da marca VW
