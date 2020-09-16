/*
              MÉTODOS DE ARRAYS
*/

// Usando  forEach  para  iterar  um  array  de inteiros
var numeros = [1, 2, 3, 4, 5, 6, 7, 8];
numeros.forEach(function (x) {
	console.log(Math.pow(x, 2));
});

// Incrementando  cada  elemento   do array de inteirios
numeros.forEach(function (v, x, n) {
	console.log('\nnumeros incrementado:', n[x] = v + 1);

});

// Usando  o  metodo  map passa cada elemento para outro
var mapeados = numeros.map(function (x) {
	return x * x;
});

mapeados.forEach(function (x) {  // Lendo array mapeados
	console.log('\nArray numeros passado á mapeados:', x);
});

// Usando filter para filtrar elementos no array numeros
menores = numeros.filter(function (x) {
	if (x < 5)
		console.log(x);
});

// Usando metodo every para verificação do array numeros
numeros.every(function (x) { // funciona como todo
	var retorno = x < 100;
	console.log(retorno);
});

// Usando metodo  some  para verificação do array numeros
numeros.some(function (x) {  // funciona como algum
	var retorno = x % 2 === 0;
	console.log(retorno);
});

// Combinando  elementos do  array  usando  metodo reduce
var soma = numeros.reduce(function (x, y) {
	return x + y;
}, 0);
console.log('\nSoma dos elementos no array numeros', soma);

// Combinando elementos  do arrayusando  metodo reduceRight
var numeros2 = [1, 2, 3,]
var pow = numeros2.reduceRight(function (a, v) {
	return Math.pow(v, a);
});
console.log('\nSoma  dos elementos  no array  numeros', pow);

// Pesquisando elementos com os metodos indexOf e lastIndexOf
console.log('\nPosição do elemento 2', numeros2.indexOf(2));
console.log('\nPosição do elemento 3', numeros2.lastIndexOf(3));

// Localiza  todas  ocorrências  de um  valor x em um array de
// índices coincidentes
function findAll(a, x) {
	var resultados = [],
		len = a.length,
		posicao = 0;
	while (posicao < len) {
		posicao = a.indexOf(x, posicao);
		if (posicao === -1) break;
		resultados.push(posicao);
		posicao++;
	}
	return resultados;
}

// Array   de  testes  para  a   função  findAll  criada  acima
var numeros3 = [1, 5, 2, 3, 4, 5, 5, 6, 7, 8, 5];
var encontrados = findAll(numeros3, 5);  // Aqui chama a função
encontrados.forEach(function (x) { // Exibe as posições
	console.log('\nO numero  5 foi encontrado na poisção:', x);
});

// Verificando se um  determinado objeto é um array com isArray
console.log('\n numeros é um array ? ', Array.isArray(numeros));
console.log('\nO número 2  é  um  array ?  ', Array.isArray(2));

// Verificando se um determinado objeto é um array com instanceof
console.log('\nnumeros é  um array ? ', numeros instanceof Array);
console.log('\nO número 2  é  um  array ?  ', 2 instanceof Array);

// Método  reverse()  de  arrays  inverte  a  ordem  dos elementos
let numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];
console.log('\nArray numeros4 após execução do método reverse()');
console.log(numeros4.reverse().join());

// Método  sort() de arrays  classifica  os  lementos  de um array.
const nomes = ['João', 'Maria', 'Antônio','Severino'];
console.log('\nArray nomes antes da ordenação: ', nomes);
console.log('\nnomes após execução do método sort()',nomes.sort());


// concat cria e retorna um novo array com os  elementos  em concat
var pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log('\npares antes da chamado do método concat', pares)
console.log('array pares depois do métdo',pares.concat(22, 24, 26));

// Inserindo e  removendo  elementos com o  métodos  pop()  e  push()
console.log('\nInserindo o nome Ana no array nomes',nomes.push('Ana'));
console.log('Após a inserção:',nomes.sort());
nomes.pop('Severino');// exclui o nome Severino do array
console.log('Após a exclusão:',nomes.sort());

// Localizando um elemento em uma array  com o método find()
var nome = nomes.find(function(nome){
    return nome === 'Maria';
});
console.log('\nExibindo nome localizado no array nomes',nome);
