/*Crie uma função que receba um número inteiro como parâmetro e mostre uma
mensagem indicando se este número é par ou ímpar, e se é positivo ou negativo. */

function imparParNegativo(num){
    
    if(num %2 == 0 && num > 0){
        console.log(`O número ${num} é PAR e POSITIVO`)
    }
    else if(num %2 == 0 && num < 0){
        console.log(`O número ${num} é PAR e NEGATIVO`)
    }
    else if(num %2 != 0 && num > 0){
        console.log(`O número ${num} é ÍMPAR e POSITIVO`)
    }
    else{
        console.log(`O número ${num} é ÍMPAR e NEGATIVO`)
    }
}
imparParNegativo(13);