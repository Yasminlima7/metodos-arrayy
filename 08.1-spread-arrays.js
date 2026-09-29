/*
* Aula 08 - Spread Operator com arrays

* O Spread ( ... ) abre os elementos de um array para que eles possam
* ser usados dentro de outro array ...
*/
const numeros = [1, 2, 3];

// Cria um novo array com os mesmos valores de 'numeros'
const copia = [ ... numeros];

// Copia os valores existentes e acrescenta 4 e 5 ao final.
const novosNumeros = [ ... numeros, 4, 5];

// O Spread tambem pode aparecer depois de outros elementos do novo array.
const numerosComInicio = [1, ... [2, 3, 4]];

console.log("Copia:", copia);
console.log("Numeros com novos valores:", novosNumeros);
console.log("Numeros com valor no inicio:", numerosComInicio);

// Cada array representa um grupo diferente de tecnologias.
const frontEnd = ["HTML", "CSS", "JavaScript"];
const backEnd = ["Node.js", "PostgreSQL"];

// Os dois arrays sao apertos e seus itens formam um unico novo array.
const tecnologias = [ ... frontEnd, ... backEnd];

console.log("Tecnologias:", tecnologias);

// A atribuicao direta nao crid uma copia: as duas variaveis apootam para o mesmo arrey.
const originalPorReferencia = [1, 2, 3];
const copiaPorReferencia = originalPorReferencia;

// Esta alteracao tombem aparecerem originalPorReferencia
copiaPorReferencia.push(4);

console.log("Original com atribuicao direta:", originalPorReferencia);

// O Spread cria outro array, separado do array original no primeiro nivel.
const originalComSpread = [1, 2, 3];
const copiaComSpread = [ ... originalComSpread];

// Apenas a copia recebe o novo valor.
copiaComSpread.push(4);

console.log("Original com Spread:", originalComSpread);
console.log("Copia com Spread:", copiaComSpread);

// fim