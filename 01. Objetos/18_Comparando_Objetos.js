function Ninja(nome, arma) {
	this.nome = nome;
	this.arma = arma;
}

const naruto = new Ninja("Naruto", "Shuriken");
const rocklee = new Ninja("Rocklee", "Punhos");
const cloneNaruto = new Ninja("Naruto", "Shuriken");

console.log(naruto === rocklee); // false
console.log(naruto === cloneNaruto); // false

// COMO COMPARAR OBJETOS
const cloneVerdadeiroNaruto = naruto; // (ISSO É UMA REFERÊNCIA DO OBJETO ORIGINAL)

console.log(cloneVerdadeiroNaruto === naruto); // true
// só retornará true quando for a referência um do outro
