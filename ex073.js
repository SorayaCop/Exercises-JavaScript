/*Faça um programa que, dado um conjunto de N números, determine o menor valor, o
maior valor e a soma dos valores; */


let arr = [11, 99, 88, 12, 77];
let min = arr.map(Number).reduce(function (a, b) {
    return Math.min(a, b);
});
let max = arr.map(Number).reduce(function (a, b) {
    return Math.max(a, b);
});

console.log('O maior valor é: ' + max);
console.log('O menor valor é: ' + min);
console.log('A soma dos valores é: ' + (max + min));