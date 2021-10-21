//Questão 11 - Dada duas lista de números A[1,2,3,4] e B[1,2,5,8], faça um algoritmo que retorne a intersecção das listas

//Os parametros da função precisam ser arrays, caso contrário não funcionará
function retornaEmComum(lista1, lista2) {
  let novaLista = [];

  for (let i = 0; i < lista1.length; i++) {
    if (lista1[i] === lista2[i])
      novaLista.push(lista1[i]);
  }
  return novaLista;
}

function main() {
  let A = [1, 2, 3, 4];
  let B = [1, 2, 5, 8];
  console.log(retornaEmComum(A, B));
}

main();
