/* Escreva um loop for ou while que exiba qual número é par e qual número é impar
O contador deve iniciar em 0 e ir até 50;*/

for (let i = 0; i <= 50; i++) {

    if (i % 2 == 0) {
        console.log(`O numéro ${i} é par`);
    } else {
        console.log(`O numéro ${i} é ímpar`);
    }
}