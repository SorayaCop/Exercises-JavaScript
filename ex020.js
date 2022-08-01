/*Escreva uma função que recebe a idade de uma pessoa;
Se ela tem mais de 18 anos, pode entrar na auto escola, imprima uma mesnagem para isso;
Se ela tem menos, ela não pode. Imprima uma mensgem pra isso;
Execute a função nos dois casos; */

function podeEntrarNaAuto(idade) {

    if(idade >= 18) {
      console.log("Pode se matricular na auto escola");
    } else {
      console.log("Não pode se matricular na auto escola");
    }
  }
  
  podeEntrarNaAuto(16);
  podeEntrarNaAuto(25);
  podeEntrarNaAuto(17);
  podeEntrarNaAuto(18);