/*Altere o programa anterior para que ele aceite apenas números entre 0 e 1000; */

function somaMairoEmenor(n1, n2, n3, n4, n5) {

    if ((n1 >= 0 && n2 >= 0 && n3 >= 0 && n4 >= 0 && n5 >= 0) &&
        (n1 <= 1000 && n2 <= 1000 && n3 <= 1000 && n4 <= 1000 && n5 <= 1000)) {

        let maior = Math.max(n1, n2, n3, n4, n5);
        let menor = Math.min(n1, n2, n3, n4, n5);
        let soma = n1 + n2 + n3 + n4 + n5;

        console.log(`O número maior é ${maior} e o menor é ${menor}. A soma de todos os números é ${soma}`);
    } else {
        console.log('Só pode ter valores de 0 a 1000');
    }
}
somaMairoEmenor(10, 20, 30, 40, 5000);