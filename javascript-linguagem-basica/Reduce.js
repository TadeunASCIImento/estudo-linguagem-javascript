/*
    REDUCE
*/

// ARRAY DE NÚEMROS INTEIROS PARA TESTES
let numeros = [0,1,2,3,4,5,6,7,8,9];

// SOMANDO OS ELEMENTOS DA FORMA ANTIGA COM O LAÇO FOR
let soma = 0;
for(let i = 0; i < numeros.length;i++){
    soma+=numeros[i];
}
console.log('Soma usando for',soma);

// SOMANDO OS ELEMENTOS USANDO O MÉTODO REDUCE
soma = numeros.reduce((soma,numero)=>{
    return soma + numero;
},0);
console.log('Soma usando reduce',soma);

// ARRAY DE ALUNOS PARA TESTE DO MÉTODO REDUCE
const alunos = [
    {nome:'João', idade:38},
    {nome:'Maria',idade:53},
    {nome:'José',  idade:13}
    ];

// GERANDO UM NOVO ARRAY APENAS COM OS NOMES DOS ALUNOS
const nomes = alunos.reduce((arrayNomes,aluno)=>{
    arrayNomes.push(aluno.nome);
    return arrayNomes;
},[]);
console.log(nomes);
