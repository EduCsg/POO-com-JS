// Utilizando prototype com props de nomes iguais

function Carro(marca, preco) {
	this.marca = marca;
	this.preco = preco;
	this.calota = true;
}

Carro.prototype.cor = "preto";
Carro.prototype.calota = false;

let fusca = new Carro("Fusca", 1000);

console.log(fusca.calota); // true, pois vem do objeto

delete fusca.calota;

console.log(fusca.calota); // false, pois vem do prototype (verificado após o obj)

/* O JS verifica primeiramente o objeto, depois
    o Prototype.
    Caso o obj esteja vazio, altera para o valor do prototype
    
    obj -> [] prototype -> [dado] // printa o dado
    obj -> [] prototype -> [] // printa undefined
    */
