/*Um novo modelo de carro da Tesal, super econômico foi lançado.
Ele faz 26km com 1 litro de combustível.
Cada litro de combustível custa R$ 6,29.
Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e em seguida diga quantos
litros de combustível ele pode comprar e quantos kilometros o carro consegue andar com este tanto de combustível.
 */

let dinheiro = prompt('Quanto você tem?');
let combustivel = 6.29 / 26;
let km = combustivel * dinheiro;

console.log(`Você pode comprar ${combustivel.toFixed(3)} litros de gasolina e \n
voce vai rodar ${km.toFixed(2)} km`);


