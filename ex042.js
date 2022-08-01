/*Crie uma regex que só aceite strings terminadas com ID; Depois teste */

const validarId = /\d+ID\b/;

console.log(validarId.test("388888ID"));