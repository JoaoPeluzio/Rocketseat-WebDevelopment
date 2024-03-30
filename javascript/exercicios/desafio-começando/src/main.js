/*
//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello World!");

//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let a = 10;
let b = 20;

alert(a + b);

//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let variable = +prompt("Insira um número:", "ex: 1, ex: 2, ex: 3");

if (!isNaN(variable)) {
  alert("O valor é um numero!");
  console.log(typeof variable);
} else {
  alert("O valor nao e um numero");
} 

//Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let result = prompt("Veja se o valor e uma string:");

if (typeof result === "string") {
  alert("O valor é uma string!");
} else {
  alert("O valor nao e uma string");
}


//Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let result = prompt("Veja se o valor e um booleano:");
let isBoolean = (result === 'true' || result === 'false');

if (typeof isBoolean === "boolean") {
  alert("O valor é um booleano!");
} else {
  alert("O valor nao e um booleano");
}



//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let a = 5;
let b = 3;

alert(a - b);



//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let c = 2;
let d = 3;

alert(c * d);



//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let c = 2;
let d = 3;

alert(c / d);



//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let result = prompt("Veja se o valor e um número par:");

if (result % 2 === 0) {
  alert("O valor é um número par!");
} else {
  alert("O valor nao e um número par");
}

*/

//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let result = prompt("Veja se o valor e um número ímpar:");

if (result % 2 !== 0) {
  alert("O valor é um número ímpar!");
} else {
  alert("O valor nao e um número ímpar");
}




