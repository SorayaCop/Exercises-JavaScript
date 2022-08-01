/*ex011 - Faça um estrutura if/else para verificar se um usuário pode dirigir;
Armazene em variáveis algumas informações sobre o usuário: idade, se tem CNH
Se a idade fpr maior que 18 e não possuir CNH, exiba uma mensagem;
Se idade for maior que 18 e tem CNH, exiba mensgaem;
Se não tiver 18 nem CNH, exiba outra mensagem;*/

let idade = 23;
let cnh = false;

if(idade >= 18 && cnh == true) {
  console.log("Sim, pode dirigir");
} else if(idade >= 18 && cnh == false) {
  console.log("Não pode dirigir, mas pode fazer a CNH");
} else {
  console.log("Não pode dirigir");
}