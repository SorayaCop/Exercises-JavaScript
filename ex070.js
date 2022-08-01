/*Crie uma função que receba como parâmetros 4 valores números, calcule o quadrado de
cada um, Se o valor resultante do quadrado do terceiro for &gt;= 1000, imprima-o e finalize;
Caso contrário, imprima os valores lidos e seus respectivos quadrados; */

function calc() {
    num1 = parseInt(prompt('Digite um valor'));
    num2 = parseInt(prompt('Digite um valor'));
    num3 = parseInt(prompt('Digite um valor'));
    num4 = parseInt(prompt('Digite um valor'));

    val1 = num1 * num1;
    val2 = num2 * num2;
    val3 = num3 * num3;
    val4 = num4 * num4;

    if (valor3quadrado > 1000) {
        console.log('O valor do quadrado do  3o numero digitado é ' + valor3quadrado);
    } else {
        console.log('O quadrado de ' + num1 + 'é: ' + val1);
        console.log('O quadrado de ' + num2 + 'é: ' + val2);
        console.log('O quadrado de ' + num3 + 'é: ' + val3);
        console.log('O quadrado de ' + num4 + 'é: ' + val4);
    }
}
calc();