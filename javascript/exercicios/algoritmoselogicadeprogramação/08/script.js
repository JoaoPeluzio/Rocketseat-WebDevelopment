/*
** Faca um programa que tenha um menu e apresente a seguinte mensagem: **
  
Ola usuario! Digite a opcao desejada

1. Cadastradar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa.

-----
O programa devera capturar o numero digitado pelo usuario e mostrar o seguinte cenario:

1. Caso o usuario digite 1, ele podera cadastrar um item em uma lista;
2. Caso o usuario digite 2, ele podera ver os itens cadastrados;
  - Se nao houver nenhum item cadastradi, mostrar a mensagem:
    "Nao existem itens cadastrados"
3. Caso o usuario digite 3, a aplicacao devera ser encerrada.

*/


/* 
Dados de entrada do usuario
1. numero desejado
2. Item da lista

Variaveis
1. Opcao digitada
2. Lista de itens

*/
let option
let items = []


while(option != 3) {

  option = Number(prompt(`
    Ola usuario! Digite a opcao desejada:
    
    1. Cadastradar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa.
    `))
}

  switch(option) {
    case 1:
      let.item = prompt("Digite o noem do item")
    items.push = (item)
      break;
      case 2:
        if(items.length == 0) {
          alert("Nao existe item cadastrado")
        } else {
          alert(items)
        }
        break;
        case 3:
          alert("Goodbye!")
          break;
        default:
          alert("Opcao invalida. Tente novamente")

  }

/*
  if(option == 1) {
    let.item = prompt("Digite o noem do item")
    items.push = (item)
  }

  else if(option == 2) {

  if(items.length == 0) {
    alert("Nao existe item cadastrado")
  } else {
    alert(items)
  }

  
} else if (option == 3) {
  alert("Goodbye!")
}
  else {}

  console.log(option, items)

}
*/
