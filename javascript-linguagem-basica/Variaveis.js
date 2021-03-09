/*
  		   DECLARANDO E USANDO VARIÁVEIS.
 */

// Declara  duas  variáveis  numéricas  do  tipo inteiro
var numero1 = 10;
var numero2 = 40;

// Declarando   variveis   literais  (string)
var message1 = 'O resultado da soma é:';
var message2 = 'O numero é impar';
var message3 = "O numero é par";

// Declara   uma    variável    booleana
var user = 'tadeu@email.com';
var pass = 'password';
var validar = null;

// Funcão verifica a paridade do  numero
function verificarParidade(numero) {
	if (numero % 2 == 0) {
		return message3;
	} else {
		return message2;
	}
}

// Simula   uma   validação   de  usuário
function validarUsuario(usuario, senha) {
	if (usuario == user && senha == pass)
		validar = true;
	else
		validar = false;
	return validar;
}

// Define   uma  função   para  somar  dois números
function somar(x, y) { return x + y; }

// Exibe  o   resultado    da   soma   no   console
console.log(message1 + somar(numero1, numero2));

// Exibe  a  verificação   da  paridade  do  numero
console.log(verificarParidade(somar(numero1, numero2)));

// Exibe  o  resultado  da  validação
console.log((validarUsuario(user, pass)));

// Declarando um objeto do tipo pessoa em JavaScript
var pessoa = {
	cpf: '111.222.333-44',
	nome: 'Tadeu',
	sobrenome: 'Nascimento',
	dataNascimento: '27/09/1982'
}

// Criando  uma  nova  propriedade  no  objeto pessoa
pessoa.profissao = 'Desenvolvedor Java';
pessoa.favoritos = ['WestWorld',
	'Altered Carbon',
	'Blade Runner',
	'X-Machina'];

// Acessando  as  propriedades  do  Objeto
console.log(pessoa);
console.log(pessoa['cpf']);
console.log(pessoa.dataNascimento);
console.log(pessoa.favoritos[0]);
// Tamanho  do  array
console.log(pessoa.favoritos.length);

// Ultimo  elemento  do  array
console.log(pessoa.favoritos[pessoa.favoritos.length - 1]);

// Declarando arrays e objetos
// Podem  conter  outros  arrays  e objetos
var dados = {
	trial1: [[1, 2], [3, 4]],
	trial2: [[5.6], [7.8]],
};
console.log(dados);

var points = [{
	x: 0,
	y: 0
}, {
	x: 1,
	y: 1
}];
console.log(points);

// Passando  o  resultado de uma função para uma variável
function plus1(numero) {
	return numero + 1;
}
var square = function (numero) {
	return numero * numero;
}
// Chama duas funções em uma  única  expressão
console.log(square(plus1(5)));

// Passando   propriedades  de um  objeto para uma função
var a = [];
a.push(1, 2, 3);             // Insere elementos no array
console.log(a);
console.log(a.reverse());// Inverte a ordem dos elementos

