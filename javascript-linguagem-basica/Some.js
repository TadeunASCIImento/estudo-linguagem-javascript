/*
      SOME
*/

//ARRAY DE PESOS E ALTURAS DAS PESSOAS
const pessoas = [{
   peso: 89,
   altura: 1.78
 },
 {
   peso: 120,
   altura: 1.90
 },
 {
   peso: 65,
   altura: 1.56
 },
 {
   peso: 56,
   altura: 1.75
 }
];

// FUNÇÃO PARA CALCULO DO IMC DAS PESSOAS
function obterImcDaPessoa(pessoa) {
 return (pessoa.peso / (pessoa.altura * pessoa.altura));
}

// VERIFICA SE EXISTE PELO MENOS UMA PESSOA ACIMA DO PESO
let ehAcimaDoPeso = false;
ehAcimaDoPeso = pessoas.some(pessoa => obterImcDaPessoa(pessoa) > 20);
console.log((ehAcimaDoPeso ? 'existe uma ou mais pessoas acima do peso' : 'não existe pessoas acima dp peso'));
