/*
* Aula 10 - Operador ternario com templates e objetos

* O ternario pode ser usado dentro de uma template literal ou para definir
* valores a partir das propriedades de um objeto.
*/
const usuario = "Marcos";
const online = true;

// O trecho entre ${} avalia o ternario antes de montar o texto final.
console.log(`${usuario} esta ${online ? "online" : "offline"}.`);

const conta = {
nome: "Ana",
ativo: true
};

// O status depende diretamente do valor booleano armazenado em `conta.ativo'.

const estado = conta.ativo ? "Ativo" : "Inativo";

console.log(`${conta.nome} - ${estado}`);