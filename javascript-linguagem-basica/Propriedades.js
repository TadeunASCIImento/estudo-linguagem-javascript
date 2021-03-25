/*
    DECLARAÇÃO DE  PROPRIEDADES
*/

// DECLARANDO AS PROPRIEDADES
const nome = 'Antonio';
const sobrenome = 'Silva';
const idade = 38;

// ATRIBUI AS PROPRIEDADES AO OBJETO PESSOA
const pessoa = {
  nome,
  sobrenome,
  idade
};
const exibirFuncionario = function() {
  console.log(`O funcionário ${this.nome} ${this.sobrenome} ocupa o cargo de ${this.cargo}`);
}
const funcionario = {
  ...pessoa,
  empresa: 'Sistemas S/A',
  cargo: 'Desenvolvedor Angular Java',
  squad: 'ninja javascript',
  exibirFuncionario
}
funcionario.exibirFuncionario();

// PASSANDO A FUNÇÃO DIRETAMENTE NO OBJETO
const outroNome = 'José'
const outroSobrenome = 'de Souza'
const outraIdade = 45;
const outraPessoa = {
  outroNome,
  outroSobrenome,
  outraIdade
};
const funcionario2 = {
  ...outraPessoa,
  empresa: 'Sistemas S/A',
  cargo: 'Desenvolvedor FullStack',
  squad: 'ninja javascript',
  exibirOutroFuncionario() {
    console.log(`O funcionário ${this.outroNome} ${this.outroSobrenome} ocupa o cargo de ${this.cargo}`);
  }
}
funcionario2.exibirOutroFuncionario();

// ÍNDICES DE PROPRIEDADES
const metodo = 'downloadPdf';
const operacao = {
    [metodo](){
        console.log('baixando arquivo teste.pdf');
    }
}
operacao[metodo]();

//CONCATENANDO DUAS STRINGS PARA CRIAR UMA FUNÇÃO
const funcao = "show"
const propriedade1 = 'Nome';
const propriedade2 = 'Completo';
const objetoTeste = {
    Nome:'Tadeu',
    Completo:'Nascimento',
    [`${funcao}${propriedade1}${propriedade2}`](){
        console.log(`${this[propriedade1]} ${this[propriedade2]}`);
    }
} 
objetoTeste.showNomeCompleto();











