//Questão 4 - Faça um algoritmo que converta a temperatura de C para F. Utilize a fórmula C = 5*(F-32)/9

//Com a fórmula dada podemos deduzir que F = (9/5)*C + 32
function celsiusToFahrenheint(temp_celsius) {
  //parseFloat é necessário para apresentar o resultado como um numero de ponto flutuante
  //toFixed(2) apresenta esse numero com precisão de duas casas decimais
  let temp_fahrenheint = parseFloat((9 / 5) * temp_celsius + 32).toFixed(2);
  console.log('A temperatura em fahrenheint é dada por: ' + temp_fahrenheint);
  return temp_fahrenheint;
}

//vários casos de teste
function main() {
  celsiusToFahrenheint(0);
  celsiusToFahrenheint(1);
  celsiusToFahrenheint(10);
  celsiusToFahrenheint(-10);
  celsiusToFahrenheint(32);
  celsiusToFahrenheint(180);
  celsiusToFahrenheint(36);
  celsiusToFahrenheint(45);
}

main();
