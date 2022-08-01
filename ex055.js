/* Escreva um algoritmo que receba dois números reais e um código de seleção do usuário. Se o código digitado for 1, faça o algoritmo somar os dois números previamente digitados e mostrar o resultado; se o código de seleção for 2, os números deverão ser multiplicados; 
se o código de seleção for 3, o primeiro número deve ser dividido pelo segundo.*/

let num1 = 20;
let num2 = 20;
let usuario = prompt('Digite 1, 2 ou 3');

if (usuario == 1) {
    console.log(num1 + num2);
}
else if (usuario == 2) {
    console.log(num1 * num2);
}
else if (usuario == 3) {
    console.log(num1 / num2);
}