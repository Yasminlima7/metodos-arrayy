/*
* Aula 10 - Operador ternario no back-end

* O ternario ajuda a montar propriedades de uma resposta quando existem
* apenas dois resultados possiveis.
*/

const estoque = 0;

// `estoque, usa o valor da variavel como propriedade do objeto.
// A propriedade `status' e calculada no momento em que o objeto e criado.
const produto = {
nome: "Mouse",
estoque,
status: estoque > 0 ? "disponivel" : "indisponivel"
};

console.log("Produto para resposta da API:", produto);

const nota = 8;

// Este ternario aninhado funciona, mas deve ser evitado quando a leitura ficar dificil.

const resultado = nota >= 9
? "Excelente"
: nota >= 6
? "Aprovado"
: "Reprovado";

console.log("Resultado com ternario aninhado:", resultado);

//fim