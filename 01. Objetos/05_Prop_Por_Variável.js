let cavalo = {
  patas: 4,
  'está domesticado': false, // pior
  estaDomesticado: false, // melhor
  n: 'teste',
};

const n = 'patas';
const m = 'estaDomesticado';

console.log(cavalo[n]); // 4
console.log(cavalo.n); // teste
console.log(cavalo[m]); // false
