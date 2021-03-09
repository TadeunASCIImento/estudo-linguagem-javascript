//Array de alunos para testes
let alunos = [{nome:'João',idade:12},{nome:'josé',idade:34},{nome:'maria',idade:56},{nome:'miriam',idade:45}];

// todos os alunos de maior usando o metodo every
let todosAlunosDeMaior = alunos.every((aluno)=>{
   return aluno.idade > 18;
});
console.log(todosAlunosDeMaior);
