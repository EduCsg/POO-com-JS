let cavalo = {
  patas: 4,
  'está domesticado': false, // pior
  estaDomesticado: false, // melhor
};

console.log(cavalo); // {patas: 4, está domesticado: false}
console.log(cavalo['está domesticado']); // false
console.log(cavalo.estaDomesticado); // false
