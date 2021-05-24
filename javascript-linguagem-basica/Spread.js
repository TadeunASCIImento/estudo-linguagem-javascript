/*
    EXPANSÃO COM O OPERADOR SPREAD (PROPRAGAÇÃO).   
*/

// EXIBINDO OS ARGUMENTOS COM APPLY
const array = [1, 4, 5, 7];
console.log('Iterando sobre o array com o método apply');
console.log.apply(console, array);

// EXIBINDO OS ARGUMENTOS COM O OPERADOR SPREAD
console.log(...array);

// SOMA DOIS NÚMEROS
function somaDoisNumerosInteiros(x, y) {
	return(x + y);
}
console.log(`Resultado da soma: ${somaDoisNumerosInteiros(1,3)}`);

// SOMANDO OS NÚMEROS DE  UM ARRAY COM O OPERADOR SPREAD
const numeros = [23, 67];
console.log(`Resultado da soma: ${somaDoisNumerosInteiros(...numeros)}`);

// VERIFICA A QUANTIADE DE VOGAIS E CONSOANTES EM UMA PALAVRA COM OPERADOR SPREAD
function getQuantidadeDeVogais(palavra) {
	let quantidadeVogais = 0;
	let quantidadeConsoantes = 0;
	for(let letra of palavra) {
		if('aâãáàeéèêiíìoóòôõuúù'.indexOf(letra) !== -1) {
			quantidadeVogais++;
		} else {
			quantidadeConsoantes++;
		}
	}
	return [quantidadeVogais, quantidadeConsoantes];
}
const palavra ='Você';
const valores = getQuantidadeDeVogais(palavra);
console.log(`A palavra (${palavra}) possuí ${valores[0]} vogais e ${valores[1]} consoantes`);
