/*
Todas propriedades tem atributos pré-setados pela linguagem nativamente
(Enumerable, Writable e Configurable)

São geralmente utilizadas pelos objetos/propriedades nativas da linguagem

Caso seja gerado um objeto herdado de algum objeto nativo que tenha essas configurações alteradas,
automaticamente herdará essas opções

Configurable
  - Se estiver FALSE, não permite que a propriedade seja editada nem deletada
*/

let pessoa = {
	nome: "Eduardo",
};

// pessoa -> Object

console.log(Object.getOwnPropertyDescriptor(pessoa, "nome"));
/*{
    value: 'Eduardo',
    writable: true,
    enumerable: true,
    configurable: true
  } */

/*
Muito difícil que seja utilizado, pois se trata de uma estrutura profunda no código.
Tendo em vista que outos programadores realizarão alteraçoes em nosso código, se torna
muito complexo caso seja alterada uma dessas configurações dentro de um objeto específico */
