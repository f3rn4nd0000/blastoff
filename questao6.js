//Questão 6 - Uma partida de futebol iniciou na hora A e terminou na hora B. Faça um algoritmo que calcule o tempo que durou a partida.

function calculaTempoPartida(A, B) {
  let tempoEmHoras = B - A;
  let tempoEmMinutos = tempoEmHoras * 60;

  return tempoEmMinutos;
}

function main() {
  console.log('O tempo da partida foi de ' + calculaTempoPartida(12, 14) + ' minutos');
}

main();
