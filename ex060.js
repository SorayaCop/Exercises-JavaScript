/*Faça um programa que leia 5 números e informe a soma e a média dos números.*/

function notas(n1, n2, n3, n4, n5) {
    let media = ((n1 + n2 + n3 + n4 + n5) / 5);
    console.log(`A media entre as 5 notas é de: ${media}`)
}
notas(10, 7.0, 5.6, 8.0, 9.0);
