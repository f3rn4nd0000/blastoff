//Questão 5 - Faça um algoritmo para apresentar se dois números são múltiplos.

function saoMultiplos(num1, num2) {
  let mensagem = ''

  if ( ((num1 % num2) === 0) || ((num2 % num1) === 0) ) {
    mensagem = 'Numeros ' + num1 + ' e ' + num2 + ' são múltiplos entre si'
  }
  else{
    mensagem = 'Numeros ' + num1 + ' e ' + num2 + ' não são múltiplos entre si'
  }
  console.log(mensagem);

  return mensagem;
}

//Contém vários casos de teste
function main() {
  saoMultiplos(9, 3);
  saoMultiplos(3, 9);
  saoMultiplos(10, 3);
  saoMultiplos(10, 2);
}

main();
