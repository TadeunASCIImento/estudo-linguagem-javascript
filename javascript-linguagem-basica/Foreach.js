// FOREACH
const nomes = ['José'', 'João', 'Maria', 'Marina'];
nomes.forEach(function (nome) {
	console.log(nome);
});
let tamanho;
// percorre a lista de nome usando o método foreach
nomes.forEach((nome) => {
	console.log(nome);
	tamanho = nomes.length;
});

console.log(tamanho);
function exibeNome(nome) {
	console.log(nome);
}
nomes.forEach(exibeNome);
