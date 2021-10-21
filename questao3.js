//Questão 3 - Dados três números (a, b, c), faça um algoritmo para mostrar o menor número.
//biblioteca necessária para interromper o programa no console.
const { exit } = require("process");

function calculaMenorNumero(num1, num2, num3) {
  let temp = 0;
  temp = num1;

  if(num2 < num1 && num2 < num3)
    temp = num2;
  else if(num3 < num1 && num3 < num2)
    temp = num3;

  console.log('o menor número é: '+temp);
  return temp;
}

//Vários casos de teste
function main() {
  calculaMenorNumero(1,2,3);
  calculaMenorNumero(3,2,1);
  calculaMenorNumero(10,4,5);
  calculaMenorNumero(10,10,10);
  calculaMenorNumero(1,-1,0);
  calculaMenorNumero(-1,0,1);
  calculaMenorNumero(1,0,-1);
  calculaMenorNumero(-2,-3,-154);
  calculaMenorNumero(12,144,-90);
  exit();
}

main();
