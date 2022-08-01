/*Crie uma função que receba 1 parâmetro de temperatura em Celsius. Calcule e mostre
as temperaturas em Kelvin e Fahrenheit */

function conversortemp(T) {

    let fahrenheit = (T * 9 / 5) + 32;
    let kelvin = (T + 273.15).toFixed(2);

    console.log(`Celsius para Fahrenheit ${fahrenheit}°F / Celsius para Kelvin ${kelvin}K`)
}
conversortemp(60);

//segunda opcão
let conversortemp = (T) => {

    let fahrenheit = (T * 9 / 5) + 32;
    let kelvin = (T + 273.15).toFixed(2);
    return `Celsius para Fahrenheit ${fahrenheit}°F / Celsius para Kelvin ${kelvin}K`
}
console.log(conversãoTemperatura(200));