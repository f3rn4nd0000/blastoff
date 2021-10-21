//Questão 8 - Faça um algoritmo que receba um número e retorne se o número é primo ou não.

function ehNumeroPrimo(numero) {

  if (numero === 1 || numero === 2) {
    console.log(numero + ' é numero primo')
    return true;
  }

  for (let j = 2; j < numero; j++) {
    if (numero % j === 0 && j != numero) {
      console.log(numero + ' não é numero primo')
      return false;
    }
  }
  console.log(numero + ' é numero primo');
  return true;
}

//Vários casos de teste
function main() {
  ehNumeroPrimo(1);
  ehNumeroPrimo(2);
  ehNumeroPrimo(3);
  ehNumeroPrimo(6);
  ehNumeroPrimo(7);
  ehNumeroPrimo(9);
  ehNumeroPrimo(11);
  ehNumeroPrimo(13);
  ehNumeroPrimo(15);
  ehNumeroPrimo(17);
  ehNumeroPrimo(29);
  ehNumeroPrimo(307);
  ehNumeroPrimo(557);
  ehNumeroPrimo(1249);
  ehNumeroPrimo(2003);
  ehNumeroPrimo(2143);
  ehNumeroPrimo(3333);
  ehNumeroPrimo(13195);
}

main();
