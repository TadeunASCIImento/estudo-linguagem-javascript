// FOREACH
const nomes = ['João', 'José', 'Maria', 'Marina'];
nomes.forEach(function (nome) { 
	console.log(nome);
});
let tamanho;
nomes.forEach((nome) => {
	console.log(nome);
	tamanho = nomes.length;
});

console.log(tamanho);
function exibeNome(nome) {
	console.log(nome);
}
nomes.forEach(exibeNome);
