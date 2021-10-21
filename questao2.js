//Questão 2- Dada a distância A e o combustível gasto B, faça um algoritmo para calcular o consumo medio.
//biblioteca necessária para ler entrada de dados do usuário.
const readline = require("readline"); 

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculaConsumoMedio(combustivel, distancia){
  return (combustivel/distancia);
}

function leDadosDoUsuario() {
  leitor.question('Digite a quantidade de combustivel gasto em Litros: ', (combustivel) => {
    leitor.question('Digite o valor da distancia percorrida em Km: ', (distancia) => {
      let resposta = calculaConsumoMedio(combustivel,distancia);
      console.log(`O consumo medio e de ${resposta} L/km`);
      leitor.close();
      return resposta;
    });
  });
}

function main() {
  leDadosDoUsuario();
}

main();
