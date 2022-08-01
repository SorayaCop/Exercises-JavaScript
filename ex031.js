/*Crie dois arrays, um com mais de 5 elementos e outro com menos;
Faça um função que verifica o número de elementos;
Se possuir menos que 5, imprima: "Poucos elementos" no console;
Se tiver mais, imprime: "Muitos elementos"; */

let nums = [1,2,3,4,5,6];
let nums2 = [1,2,3];

function verificaElementosArray(arr) {
  if(arr.length >= 5) {
    console.log("Muitos elementos");
  } else {
    console.log("Poucos elementos");
  }
}

verificaElementosArray(nums);
verificaElementosArray(nums2);