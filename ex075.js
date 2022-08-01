/*Faça um script que leia um número e exiba o dia correspondente da semana. 
(1- Domingo, 2 - Segunda, etc.), se digitar outro valor deve aparecer valor inválido. */

function diasSemana(num) {
    if (num == 1) {
        console.log('DOMINGO');
    } else if (num == 2) {
        console.log('SEGUNDA-FEIRA');
    } else if (num == 3) {
        console.log('TERÇA-FEIRA');
    } else if (num == 4) {
        console.log('QUARTA-FEIRA');
    } else if (num == 5) {
        console.log('QUINTA-FEIRA');
    } else if (num == 6) {
        console.log('SEXTA-FEIRA');
    } else if (num == 7) {
        console.log('SÁBADO');
    } else {
        console.log('Opção ínvalida, escolher entre 1 e 7');
    }
}
diasSemana(7);
