/*Crie uma regex que aceite só letras maiúsculas. Depois teste */

const validarMaiucula = /[A-Z]/;

console.log(validarMaiucula.test("testando"));
console.log(validarMaiucula.test("123"));
console.log(validarMaiucula.test("TESTANDO"));

