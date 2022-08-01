/* Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), leu um valor de temperatura em Fahrenheit e exibi-lo em Celsius
 */

let Fahrenhet = prompt("Adicione a temperatura em Fahrenhet: ");
let converta = (Fahrenhet - 32) * 5 / 9;

console.log('A temperatura em Celsius é: ' + converta.toFixed(2));