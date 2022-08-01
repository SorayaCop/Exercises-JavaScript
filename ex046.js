/*Elabore um script que leia dois números e imprima  o resultado das operações aritméticas soma, produto, divisão e resto da divisão (%) entre esses números */

function lerNum(num1, num2) {
    let soma = num1 + num2;
    console.log(soma);
    let produto = num1 * num2
    console.log(produto);
    let divisao = num1 / num2;
    console.log(divisao);
    let resto = num1 % num2;
    console.log(resto);
}
lerNum(20, 10);
