/*
* Aula 09 - Rest Operator com arrays

* O Rest ( ... ) reune os valores que sobraram em uma nova variavel.
* O mesmo simbolo pode ser Spread ou Rest: o contexto define o comportamento.
*/

const tecnologias = ["HTML", "CSS", "JavaScript"];

// Dentro de um novo array, ' ... tecnologias' espalha valores: este e o Spread.
const copia = [ ... tecnologias];

// Na desestruturacao, o Rest guarda todos os itens restantes em um novo array.
const [primeiraTecnologia, ... tecnologiasRestantes] = tecnologias;

console.log("Copia com Spread:", copia);
console.log("Primeira tecnologia:", primeiraTecnologia);
console.log("Tecnologias restantes com Rest:", tecnologiasRestantes);

const numeros = [10, 20, 30, 40, 50];

// O Rest deve ficar por ultimo, pois ele representa todos os valores ainda nao atribuidos.
const [primeiroNumero, segundoNumero, ... outrosNumeros] = numeros;

console.log("Primeiro numero:", primeiroNumero);
console.log("Segundo numero:", segundoNumero);
console.log("Outros numeros:", outrosNumeros);