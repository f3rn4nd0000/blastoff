//Questão 12 - Dada duas lista de números A[1,2,3,4] e B[1,2,5,8], faça um algoritmo que retorne a concatenação das listas.


//função auxiliar para ordenar a lista, uma vez que a concatenação das duas se dá de forma desordenada.
function ordenaLista(lista) {

  for (let i = 0; i < lista.length; i++) {
    temp = lista[i];
    if (lista[i + 1] < lista[i]) {
      lista[i] = lista[i + 1];
      lista[i + 1] = temp;
    }
  }
  return lista;
}

function concatena(lista1, lista2) {

  let listaConcatenada = [];

  for (let i = 0; i < (lista1.length); i++) {
    if (lista1[i] === lista2[i])
      listaConcatenada.push(lista1[i]);
    else {
      listaConcatenada.push(lista1[i]);
      listaConcatenada.push(lista2[i]);
    }
    ordenaLista(listaConcatenada);
  }
  return listaConcatenada;
}

function main() {
  let A = [1, 2, 3, 4];
  let B = [1, 2, 5, 8];
  console.log(concatena(A, B));
}

main();
