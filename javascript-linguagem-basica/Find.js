let alunos = [{nome:'João'},{nome:'josé'},{nome:'maria'}];

// buscando determinado elemento da forma antiga
let aluno;
for(let i=0; i< alunos.length; i++){
   if(alunos[i].nome ==='João'){
       aluno = alunos[i];
   }
}
console.log(aluno);

// buscando elemento com o metodo find
aluno = alunos.find((aluno)=>{
   return aluno.nome ==='João';
});
console.log(aluno);
