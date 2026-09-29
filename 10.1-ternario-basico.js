/*
* Aula 10 - Operador ternario basico
*

* Estrutura: condicao ? valorSeVerdadeiro : valorSeFalso
* Use o ternario quando houver uma decisao simples entre dois resultados.
*/
const idade = 18;

// Se a idade for 18 ou maior, o primeiro texto e escolhido; caso contrario, o segundo.

const resultadoIdade = idade >= 18 ? "Maior de idade" : "Menor de idade";

const nota = 8;

// O ternario retorna um valor e pode ser atribuido diretamente a uma variavel.

const situacao = nota >= 6 ? "Aprovado" : "Reprovado";

const estoque = 5;

// A condicao verifica se existe ao menos uma unidade disponivel.
const disponibilidade = estoque > 0 ? "Disponivel" : "Sem estoque";

const clienteVip = true;

// O desconto varia de acordo com o valor booleano de `clienteVip.
const desconto = clienteVip ? 20 : 5;

console.log("Idade:", resultadoIdade);
console.log("Situacao:", situacao);
console.log("Disponibilidade:", disponibilidade);
console.log("Desconto:", desconto + "%");

// fim