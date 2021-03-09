// Array de alunos para testes
let alunos = [{
    aluno: 'João',
    idade: 18,
    curso: 'Javascript'
  },
  {
    aluno: 'José',
    idade: 22,
    curso: 'Java'
  }, {
    aluno: 'Maria',
    idade: 25,
    curso: 'Angular'
  },
  {
    aluno: 'Silvia',
    idade: 19,
    curso: 'HTML5'
  },
];
// filtra os alunos por curso usando o metodo filter
let alnunosPorCurso = alunos.filter((aluno) => {
  return (aluno.curso === 'Javascript' || aluno.curso === 'Angular');
});
console.log(alnunosPorCurso);
