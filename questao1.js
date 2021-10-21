// Questão 1: Dada as idades I, J, K, X, Y. Faça um algoritmo para calcular a média das idades.
//biblioteca necessária para ler entrada de dados do usuário a partir do terminal.
const readline = require("readline");

// Cria uma instância de readline, configurando os streams de leitura e escrita
const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mediaIdade(array) {
  let soma = 0;
  for (let i = 0; i < 5; i++){
    soma += parseFloat(array[i]);
  }
  media = soma/5;
  console.log('a media de idade e de : ' + media);
  return media;
}

function leDadosDoUsuario() {
  let soma = 0;
  let media = 0;
  //os numeros devem ser digitados na mesma linha com um espaco entre eles, caso contrario o programa não será executado corretamente
  leitor.question('Digite cinco numeros: ', (input) => {
    var vetorDeDados = input.trim().split(' '); // um vetor contendo todas os 5 numeros digitados pelo usuario
    mediaIdade(vetorDeDados);
    leitor.close();
  });
}

function main() {
  leDadosDoUsuario();
}

main();
