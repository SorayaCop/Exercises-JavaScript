/*Crie uma função que receba 2 valores inteiros (início e fim) e imprime os valores de
início até fim. Caso o valor de fim for menor ou igual ao início, mostrar uma mensagem de
erro, valores inválidos. */

function valores(inicio, final) {
    if (final < inicio) {
        console.log('O valor inicial deve ser menor');
    } else {
        contador = inicio;
        while (contador < final) {
            console.log(contador);
            contador++;
        }
    }
}
valores(5, 10);