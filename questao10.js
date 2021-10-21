//Questão 10 - Faça um algoritmo que receba um número e retorne o Fatorial desse número.

function fatorial(numero) {

  if (numero === 1 || numero === 0) {
    return 1;
  }
  else if (numero > 1)
    return numero * fatorial(numero - 1);
}

//Vários casos de teste!
function main() {
  console.log(fatorial(0)); //1
  console.log(fatorial(1)); //1
  console.log(fatorial(2)); //2
  console.log(fatorial(3)); //6
  console.log(fatorial(4)); //24
  console.log(fatorial(5)); //120
  console.log(fatorial(6)); //720
  console.log(fatorial(7)); //5040
  console.log(fatorial(8)); //40320
}

main();
