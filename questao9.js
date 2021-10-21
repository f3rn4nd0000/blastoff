//Questão 9 - Faça um algoritmo que receba um número e retorne a tabuada desse número.

function tabuada(numero) {

  let array_tabuada = [];

  for (let i = 0; i < 10; i++) {
    array_tabuada[i] = numero * (i + 1);
  }
  return array_tabuada;
}

function main() {
  console.log('tabuada do 1: ' + tabuada(1));
  console.log('tabuada do 2: ' + tabuada(2));
  console.log('tabuada do 3: ' + tabuada(3));
  console.log('tabuada do 4: ' + tabuada(4));
  console.log('tabuada do 5: ' + tabuada(5));
  console.log('tabuada do 6: ' + tabuada(6));
  console.log('tabuada do 7: ' + tabuada(7));
  console.log('tabuada do 8: ' + tabuada(8));
  console.log('tabuada do 9: ' + tabuada(9));
}

main();
