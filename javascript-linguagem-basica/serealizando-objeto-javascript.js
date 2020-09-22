/*
   Serealização de objetos JavaScript.
*/

// Objeto JavaScript deserealizado.
let Pessoa = {
    nome: 'Tadeu',
    sobrenome: 'Nascimento',
    idade: 37,
    dataNascimento: '2020-09-1982',
    email: 'tadeunascimentosp@gmail.com',
    maioridade: true
};

// sereralizando o objeto pessoa
pessoaSerealizada = JSON.stringify(Pessoa);
console.log(pessoaSerealizada);

// Copia profunda de pessoaSerealizada
pessoaCopia = JSON.parse(pessoaSerealizada);
console.log(pessoaCopia);
