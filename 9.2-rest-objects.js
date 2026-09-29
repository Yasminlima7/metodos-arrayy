/*
* Aula 09 - Rest Operator com objetos

* Ao desestruturar um objeto, o Rest cria outro objeto com as propriedades
* que nao foram retiradas explicitamente.
*/

const usuario = {
nome: "Lucas",
email: "lucas@email.com",
idade: 18,
cidade: "Sao Paulo"
};

// nome recebe uma propriedade; outrosDados' recebe todas as propriedades restantes.
const { nome, ... outrosDados } = usuario;

console.log("Nome:", nome);
console.log("Outros dados:", outrosDados);

const produto = {
id: 10,
nome: "Teclado",
preco: 150,
estoque: 20
};
// Separar o id facilita usar os demais dados como um objeto independente.
const { id, ... dadosProduto } = produto;

console.log("Id do produto:", id);
console.log("Dados do produto:", dadosProduto);

// Este objeto representa dados que poderiam vir de uma API ou de um banco de dados.
const usuarioDaApi = {
id: 7,
nome: "Marina",
email: "marina@email.com",
senha: "123456"
};

// A senha e retirada; por isso ela nao entra no objeto que sera exibido ao cliente.
const { senha, ... usuarioSeguro } = usuarioDaApi;

console.log("Usuario seguro:", usuarioSeguro);

const conta = {
id: 12,
nome: "Joana",
email: "joana@email.com",
senha: "senha-secreta",
token: "abc123"
};

// Renomeamos a senha extraida e retiramos o token para manter somente dados publicos.
const { senha: senhaDaConta, token, ... dadosPublicos } = conta;

console.log("Dados publicos:", dadosPublicos);

// fim