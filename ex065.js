/*Crie uma função que recebe como parâmetros nome, nota1, nota2 e nota3. Se as 3
notas do aluno estiverem no intervalo de 0 a 10, calcular a média, mostrar o nome do aluno
e se está aprovado ou não (média 6). Senão exibir notas inválidas. */

function aluno(nome, n1, n2, n3) {
    let soma = n1 + n2 + n3
    let media = soma / 3
    if ((n1 >= 0 && n2 >= 0 && n3 >= 0) && (n1 <= 10 && n2 <= 10 && n3 <= 10)) {
        if (media > 6) {
            console.log(`APROVADO - O aluno ${nome} ficou com média ${media.toFixed(2)}`)
        } else {
            console.log(`REPROVADO - O aluno ${nome} ficou com média ${media.toFixed(2)}`)
        }
    } else {
        console.log('Notas inválidas!');
    }
}
aluno('Sosozinha', 10, 9, 9);