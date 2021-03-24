/*
    LISTAS SEM REPETIÇÕES COM SETS E WEAKSETS
*/

//VERIFICA SE UM DETERMINADO ELEMENTO EXISTE NO ARRAY
function TesteSet(){
    let array = [];
    this.add = (valor)=> {
        if(array.indexOf(valor) === -1){
            array.push(valor);
        }
    },
    //EXIBE OS VALORES DO ARRAY
    this.showNumeros = ()=> {
        console.log(array);
    }
}

//ADICIONA ELEMENTOS NO ARRAY
let set = new TesteSet();
set.add(23);
set.add(23);
set.add(34);
set.add(56);
set.add(01);
set.add(40);
set.add(22);
//EXIBINDO OS VALORES DO ARRAY
set.showNumeros();

// ESTRUTURA DE SET NATIVA DO JAVASCRIPT ES6
let outroSet = new Set([23,23,34,56,01,40,22]);
console.log(outroSet);


/*
    USANDO SET PARA ELIMINAR VALORES DUPLICADOS EM UMA LISTA
*/

// CRIA UM SET COM TRÊS ELEMENTOS
const musicas = new Set(['musica1', 'musica2', 'musica3']);

// PERCORRE O SET COM MÉTODO FOREACH
console.log('Iteração com o método Foreach');

// SIZE RETORNA O TAMANHO DO SET
const size = musicas.size;

musicas.forEach(musica => {
  if (size > 0) {
    console.log(musica);
  } else {
    console.log('Não foram encontradas músicas');
  }
});

// USANDO HAS PARA VERIFICAR SE ELEMENTO JÁ EXISTE NO SET
if (musicas.has('musica1')) {
  console.log('Antes do método delete -> Já está na lista');
}

// DELETANDO APENAS UM ELEMENTO DO SET COM O MÉTODO DELETE
musicas.delete('musica1');
if (musicas.has('musica1')) {
  console.log('Já está na lista');
} else {
  console.log('Após o metodo delete -> não está na lista');
}
