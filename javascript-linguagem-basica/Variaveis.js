// Declarando e acessando os valores em variáveis.

// Javascript aceita vários tipos de valores.

_inteiros = 1;                                        // Números.
_reais = 0.01;                                        // Tipo Number para inteiros e reais. 
strings = "Hello word";                               // Aspas para textos.
_strings = 'Javascript';                              // Apóstrofos também para Strings.'
_true = true;                                         // Valores Boleano (true).
_false = false;                                       // Valor Bolenano (false).   
_null = null;                                         // Valor nulo (nenhum valor).
_undefined = undefined;                               // Indefinido semelhante ao null.
_objeto = {                                           // Objeto Javascript (JSON - Javascript Object Notation).
    curso: 'Javascript',
    periodo: 'madrugada',
    duracao: 'Uma vida inteira'
};
_array = [1, 2 ,'texto', true, false, _objeto.curso]; // Arrays

// Acessando as propriedades do objeto ( . ou [] )

const _periodo = _objeto.periodo;                   // acesso com .
console.log(`Período do curso: ${_periodo}`);

const _curso = _objeto['curso'];                    // acesso com []
console.log(`Linguagem do curso: ${_curso}`);

// Criando uma nova propriedade no objeto por meio da atribuição.
_objeto.valor = "R$1.200,00"
console.log('Objeto',_objeto);

// Cria um novo objeto vazio dentro do objeto.
_objeto.conteudo = {};
console.log('Objeto',_objeto);


// Arrays (Listas indexadas numéricamente).
const pares = [2, 4, 6, 8, 10, 12, 14];
console.log('Tamanho da lista',pares.length);                             // length propriedade tamanho da lista.

const primeiro = pares[0];              // Primeiro elemento da lista.
console.log('Primeiro elemento da lista',primeiro);

const ultimo = pares[pares.length - 1]; // Ultimo elemento da lista (usa o tamando da lista (length) - 1,
console.log('último elemento da lista',ultimo);                           // para apontar o último indíce).

// Declara um array vazio.
const vazio = [];
vazio.push('elemento');  // Insere um novo elemento no array.
console.log(vazio);

// Arrays de objetos;
const _objetos = [
    {objetoX:0, objetoY:1},
    {objetoZ:1, objetoN:1},
];
console.log(_objetos);

const _arrays = {
    prop1:[ [1 ,2 ,3], [42, 52, 65] ],
    prop2:[ [7, 8, 9], [10, 11, 12] ]
}
console.log(_arrays.prop1[0][0]);

// Atribuíndo uma função à uma variável.
const funcaoPlus1 = (x) =>{
    return x+1;
}
const plus1 = funcaoPlus1(6);
console.log(plus1);

// Sequência de escape Unicode
// ( \u00e9 ) igual á ( é ) sequência de escape Unicode.

const $ehVerdade = 'café' === 'caf\u00e9' ? true : false;    // \u seguido de 4 digítos hexadecimais usando as letras de A-F.
console.log($ehVerdade);  


