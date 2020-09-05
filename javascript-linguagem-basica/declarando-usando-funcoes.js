/*
        DEFININDO E UTILIZANDO FUNÇÕES EM JAVASCRIPT
*/


// Declara  um  objeto  do  tipo  pessoa  com  4  propriedades
var pessoa = {
	nome: 'Tadeu',
	sobrenome: 'Nascimento',
	altura: 1.75,
	peso: '75'

};

// Define uma função que exibe as propriedades do objeto pessoa
function exibirPropriedades(pessoa) {
	for (var prop in pessoa) // Laço  for in  percorre o objeto
		console.log(prop + ": " + pessoa[prop] + "\n");
};

// Chama a função  para exibir as propriedades do objeto Pessoa
exibirPropriedades(pessoa);

// Define uma função de cálculo para  o índice de massa corporal
function calcularImc(pessoa) {
	var imc = pessoa.peso / (Math.pow(pessoa.altura, 2));
	console.log(pessoa.nome, ' seu imc é', Math.floor(imc));
};
// Chama a função de cálculo de índice de massa corporal e exibe 
calcularImc(pessoa);

// Define uma função recursiva  que  realiza  o  cálculo fatorial
var fatorial = function calcularFatorial(x) {
	if (x <= 1) return 1;
	else
		return x * calcularFatorial(x - 1);
};
// Usa uma expressão de função para realizar o cálculo do fatorial
console.log('\nfatorial de 5 é ', fatorial(5));





