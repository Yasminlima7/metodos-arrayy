/*
* Aula 08 - Spread Operator no back-end

* O Spread e muito usado para montar dados atualizados sem alterar
* diretamente o objeto que representa o registro original.
*/

// Simula um usuario que ja existe no banco de dados.
const usuarioBanco = {
id: 5,
nome: "Lucas",
email: "lucas@email.com",
ativo: true
};

// Simula os dados parciais recebidos em uma requisicao de atualizacao.
const dadosRecebidos = {
nome: "Lucas Silva",
email: "lucas.silva@email.com"
};
// As propriedades recebidas vem por ultimo e atualizam apenas os campos com o mesmo nome.
const usuarioAtualizado = {
... usuarioBanco,
... dadosRecebidos
};
console.log("Usuario atualizado:", usuarioAtualizado);

// Este objeto possui outro objeto dentro dele.
const usuario = {
nome: "Ana",
endereco: {
cidade: "Sao Paulo"
}
}
// O Spread copia somente o primeiro nivel do objeto.
const copia = { ... usuario };

// 'endereco' continua sendo a mesma referencia nos dois objetos.
copia.endereco.cidade = "Campinas";

// As duas saidas mostram Campinas e comprovam que a copia foi superficial.
console.log("Cidade no objeto original:", usuario.endereco.cidade);
console.log("Cidade na copia:", copia.endereco.cidade);

//fim