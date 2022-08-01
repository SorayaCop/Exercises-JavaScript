/*Faça um script que leia três números inteiros, em seguida mostre o maior e o menor
deles. */

function nums(num1, num2, num3) {

    if (num1 > num2) {
        if (num1 > num3) {
            console.log("Número 1 é o maior!");
        } else
            console.log("Número 3 é o maior!");
    } else if (num2 > num1) {
        if (num2 > num3) {
            console.log("Número 2 é o maior!");
        } else
            console.log("Número 3 é o maior!");
    }
    if (num1 < num2) {
        if (num1 < num3) {
            console.log("Número 1 é o menor!");
        } else
            console.log("Número 3 é o menor!");
    } else if (num2 < num1) {
        if (num2 < num3) {
            console.log("Número 2 é o menor!");
        } else
            console.log("Número 3 é o menor!");
    }
}
nums(20, 80, 200);