/*
    MAPAS

*/

// CRIA UM NOVO MAPA
const mapa = new Map();

function funcao(){};// FUNÇÃO PASSADA PARA O MAPA

const objeto = {}; // OBJETO JAVASCRIPT PASSADO PARA O MAPA

// INSERE OS VALORES NO MAPA
mapa.set('string','esta e uma string');
mapa.set(objeto,'este é um objeto javascript');
mapa.set(funcao,'esta e uma função');

console.log(mapa.get('string'));

// TAMANHO DO MAPA
const size = mapa.size;
console.log('Tamanho do mapa', size);

// USANDO MÉTODO HAS PARA VERIFICA A EXISTÊNCIA DE UM ELEMENTO NO MAPA
const ehString = mapa.has('string');
console.log('A chave string existe no mapa?',(ehString?'sim':'não'));

const ehFuncao = mapa.has(funcao);
console.log('A chave funcao existe no mapa?',(ehFuncao?'sim':'não'));

const ehObjeto = mapa.has(objeto);
console.log('A chave objeto existe no mapa?',(ehObjeto?'sim':'não'));

// RECUPERANDO OS VALORES DO MAPA COM O MÉTODO GET
console.log(mapa.get('string'));
console.log(mapa.get(funcao));
console.log(mapa.get(objeto));

// DELETANDO ELEMENTO DO MAPA COM O MÉTODO DELETE
mapa.delete('string');
console.log('A chave string existe no mapa?',(mapa.has('string')?'sim':'não'));

// REMOVENDO TODOS ELEMENTOS DO MAPA COM CLEAR
mapa.clear();
console.log('Tamanho do mapa', mapa.size);

// SETA NOVOS VALORES NO MAPA PARA TESTE
mapa.set('cem',100);
mapa.set('duzentos',200);
mapa.set('trezentos',300);

// LENDO AS CHAVES DO MAPA COM O MÉTODO KEYS
for (const chave of mapa.keys()) {
      console.log('cahve',chave);
}
// LENDO OS VALORES DO MAPA COM MÉTODO VALUES
for (const valor of mapa.values()) {
    console.log('valor',valor);
}

// LENDO AS ESTRADAS DO MAPA COM O MÉTODO ENTRIES
for (const entrada of mapa.entries()) {
    console.log('entrada',entrada);
}
