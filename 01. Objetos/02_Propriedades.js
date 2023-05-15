let carro = {
  portas: 4,
  cor: 'Preto',
};

console.log(carro); // {portas: 4, cor: 'Preto'}

console.log(carro.portas); // 4

console.log(carro.cor); // Preto

if (carro.portas > 2) {
  console.log('Esse carro tem mais de 2 portas');
}

let pessoa = {
  nome: 'Eduardo',
};

console.log(pessoa); // {nome: 'Eduardo'}

console.log(pessoa['nome']); // 'Eduardo

let nomePessoa = pessoa['nome'];
console.log(nomePessoa.length); // 7
