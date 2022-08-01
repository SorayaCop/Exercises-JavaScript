/*Escreva um programa que leia três números e mostre o maior entre eles. */

let num1 = prompt('Digite o primeiro número:');
let num2 = prompt('Digite o segundo número:');
let num3 = prompt('Digite o terceiro número:');

if(num1 > num2 && num1 > num3){
    console.log('O primeiro número é maior');
}else if(num2 > num1 && num2 > num3){
    console.log('O segundo número é maior');
}else{
    console.log('O terceiro é maior!');
}