//Questão 14 - Faça um algoritmo que recebe uma palavra e retorne se a palavra é palíndromo.
//(Palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa. Ex: osso, Ana e etc).

function isPalindrome(palavra) {
  let ehPalindromo = false;

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === palavra[(palavra.length) - (i + 1)]) {
      ehPalindromo = true;
    }
    else
      return false;
  }
  return ehPalindromo;
}

//Casos de teste
function main(){
  console.log(isPalindrome('arara'));
  console.log(isPalindrome('josé'));
  console.log(isPalindrome('osso'));
  console.log(isPalindrome('aviao'));
  console.log(isPalindrome('ana'));
}

main();
