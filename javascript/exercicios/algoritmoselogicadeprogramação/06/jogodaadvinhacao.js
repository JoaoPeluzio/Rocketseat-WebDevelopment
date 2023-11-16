/*
** Jogo da advinhação **
[1] Apresente a mensagem ao usuário: "Adivinhe o número que eu estou pensando? Está entre 0 e 10"

[2] Crie uma lógica para gear um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

[3] Enquanto o usuário não advinhar o número, mostrar a mensagem: "Erro, tente novamente".

[4] Caso o usuário acerte o número, apresente a mensagem: "Parabéns! Você advinhou o número em "X" tentativas"

[5] Substitua o "X" da mensagem [5] pelo númeri de tentativas.
*/


// Para capturar a informação usar "Let"

let result = prompt ("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 0;

while(Number(result) != randomNumber) {
  result = prompt("Erro tente novamente:")
  xAttempts++
}


alert(`Parabens! O numero que eu pensei foi ${randomNumber} e voce advinhou o numero em ${xAttempts} tentativas`)