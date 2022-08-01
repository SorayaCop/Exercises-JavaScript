/*Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo. */

let quadrado = (medida) => {
    let perimetro = medida * 4
    let area = medida * medida

    return `A área do seu quadrado é ${area} e o perímetro é ${perimetro}`
}
console.log(quadrado(3));