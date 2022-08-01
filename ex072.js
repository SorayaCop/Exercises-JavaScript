/*Crie uma função que receba como parâmetro o nome e a idade de um nadador. Exiba
o nome dele e sua classificação de acordo com as seguintes categorias:
Infantil A = 5 a 7 anos;
Infantil B = 8 a 11 anos;
Juvenil A = 12 a 13 anos;
Juvenil B = 14 a 17 anos;
Adultos = Maiores de 18 anos; */

function classNadador(nome, idade) {

    if (idade >= 5 && idade <= 7) {
        console.log(`O nadador ${nome} está na categoria Infantil A = 5 a 7 anos`);
    } else if (idade >= 8 && idade <= 11) {
        console.log(`O nadador ${nome} está na categoria Infantil B = 8 a 11 anos`);
    } else if (idade >= 12 && idade <= 13) {
        console.log(`O nadador ${nome} está na categoria Infantil A = 12 a 13 anos`);
    } else if (idade >= 14 && idade <= 17) {
        console.log(`O nadador ${nome} está na categoria Infantil A = 14 a 17 anos`);
    } else {
        console.log(`O nadador ${nome} está na categoria Adulto = Maiores de 18`);
    }
}
classNadador('Nemo', 30);