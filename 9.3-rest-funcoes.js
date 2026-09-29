/*
* Aula 09 - Rest Operator em funcoes

* Um parametro Rest permite receber qualquer quantidade de argumentos.
* Dentro da funcao, esses argumentos ficam disponiveis como um array.
*/
// Todos os nomes enviados na chamada sao reunidos no array 'nomes'.
const exibirNomes = ( ... nomes) => {
console.log("Nomes recebidos:", nomes);
}
// A funcao aceita dois, tres ou muitos numeros sem precisar declarar cada parametro.
const somar = ( ... numeros) => {
let total = 0;
}
// Percorre o array criado pelo Rest e acumula cada valor no total.
for (const numero of numeros) {
total += numero;

return total;
}
// Parametros normais vem antes; o Rest deve ser sempre o ultimo parametro.
const criarEquipe = (Lider, ... integrantes) => {
console.log("Lider:", lider);
console.log("Integrantes:", integrantes);
};
// `reduce' soma todas as notas recebidas no array criado pelo Rest.
const calcularMedia = ( ... notas) => {
const total = notas.reduce((acumulador, nota) => acumulador + nota, 0);

return total / notas.length;
};

// O primeiro argumento identifica o cliente; todos os outros se tornam itens do pedido.
const registrarPedido = (cliente, ... itens) => {
return {
cliente,
quantidadeDeItens: itens.length,
itens
};
};
// Cada chamada mostra que a quantidade de argumentos pode variar.
exibirNomes("Ana", "Carlos", "Lucas");
console.log("Soma de 10 e 20:", somar(10, 20));
console.log("Soma de 10, 20, 30 e 40:", somar(10, 20, 30, 40));
criarEquipe("Ana", "Bruno", "Carlos", "Marina");
console.log("Media das notas:", calcularMedia(8, 7.5, 9, 6));
console.log("Pedido:", registrarPedido("Rafael", "Mouse", "Teclado", "Monitor"));

// fim