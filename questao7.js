//Questão 7 - Dada uma lista de números A[1,2,3,…], faça um algoritmo que retorne uma lista somente com os números pares.

function retornaNumerosPares(listaDeNumeros) {
  let vetorAuxiliar = [];
  for (let i = 0; i < listaDeNumeros.length; i++) {
    let percorreVetor = listaDeNumeros[i];
    if ((percorreVetor % 2) === 0) {
      vetorAuxiliar.push(percorreVetor);
    }
  }
  if (vetorAuxiliar.length === 0)
    vetorAuxiliar = 'não há numeros pares na lista!';
  // vetorAuxiliar.filter(item => (item % 2) !== 0);
  return vetorAuxiliar;
}

function main() {
  let lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  let lista2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
  let lista3 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

  console.log(retornaNumerosPares(lista1) + '\n');
  console.log(retornaNumerosPares(lista2) + '\n');
  console.log(retornaNumerosPares(lista3) + '\n');
}

main();
