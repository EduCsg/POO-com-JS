var Humano = /** @class */ (function () {
    function Humano(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Humano.prototype.seApresentar = function () {
        return "O nome \u00E9 ".concat(this.nome, " e tem ").concat(this.idade, " anos!");
    };
    return Humano;
}());
var Eduardo = new Humano("Eduardo", 18);
console.log(Eduardo); // Humano { nome: 'Eduardo', idade: 18 }
console.log(Eduardo.seApresentar()); // O nome é Eduardo e tem 18 anos!
