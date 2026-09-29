/*
* Aula 08 - Spread Operator com objetos

* Em objetos, o Spread copia propriedades para um novo objeto.
* Quando uma propriedade se repete, o ultimo valor informado vence.
*/
const usuario = {
nome: "Ana",
idade: 18
}

// Cria um novo objetq com as propriedades de `usuario'.
const copiaUsuario = { ... usuario };

// Reaproveita as propriedades existentes e adiciona uma nova propriedade.
const usuarioCompleto = {
... usuario,
curso: "Desenvolvimento de Sistemas"
};

console.log("Copia do usuario:", copiaUsuario);
console.log("Usuario completo:", usuarioCompleto);

const produto = {
nome: "Mouse",
preco: 80,
estoque: 10
}
// O novo valor de `preco' vem depois do Spread e, por isso, substitui o valor antigo.
const produtoAtualizado = {
... produto,
preco: 90
}
// Aqui o Spread vem por ultimo e substitui o valor 100 pelo preco original, 80.
const precoAntesDoSpread = {
preco: 100,
... produto
};
// Aqui o novo valor vem por ultimo e o preco final passa a ser 100.
const precoDepoisDoSpread = {
... produto,
preco: 100
}

console.log("Produto atualizado:", produtoAtualizado);
console.log("Preco antes do Spread:", precoAntesDoSpread.preco);
console.log("Preco depois do Spread:", precoDepoisDoSpread.preco);

// fim
