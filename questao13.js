//Questão 13 - Faça um algoritmo que receba uma matriz[i,z] como parâmetro e imprima todos os valores dessa matriz.

function imprimeMatriz(matriz) {
  //dois loops para percorrer cada indice da matriz
  for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
      console.log(matriz[i][j]);
    }
  }
  return;
}

function main() {
  //matriz de exemplo, como não existem matrizes em JS, então foi necessário criar uma array de arrays  
  let M = [
    [1, 2, 3, 4],
    [11, 12, 13, 14],
    [20, 30, 40, 50],
    [17, 18, 19, 20]
  ];
  imprimeMatriz(M);
}

main();
