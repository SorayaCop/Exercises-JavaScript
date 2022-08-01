/*Em uma certificação são feitos 5 exames (I, II, III, IV e V). Escreva um programa que leia as notas destes exames e imprima a classificação do aluno, sabendo que a média é 70;
Classificação: 
A – passou em todos os exames;
B – passou em I, II e IV, mas não em III ou V;
C – passou em I e II, III ou IV, mas não em V;
Reprovado – outras situações; */

let n1 = prompt('Primeira nota:');
let n2 = prompt('Segunda nota:');
let n3 = prompt('Terceira nota:');
let n4 = prompt('Quarta nota:');
let n5 = prompt('Quinta nota');

if (n1 >= 70 && n2 >= 70 && n4 >= 70 && n3 >= 70 && n4 >= 70 && n5 >= 70) {
    console.log('Sua nota é A');
}
else if ((n1 >= 70 && n2 >= 70 && n4 >= 70) && (n3 < 70 && n5 < 70)) {
    console.log('Sua nota é B');
} else if ((n1 >= 70 && n2 >= 70 || n4 >= 70) && (n5 < 70)) {
    console.log('Sua nota é B');
} else {
    console.log('Reprovado - outras situações');
}