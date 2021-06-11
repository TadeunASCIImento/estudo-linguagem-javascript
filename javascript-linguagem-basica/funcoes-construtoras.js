// Funções Construtoras


// Defininido uma função construtora para para inicializar um objeto Pessoa

function Pessoa(nome, sobrenome, dataCadastro) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataCadastro = dataCadastro;
  }
  
  
  // Criando uma instância d0 objeto Pessoa
  
  const pessoa = new Pessoa('Tadeu', 'Nascimento', '2021/01/19');
  console.log(pessoa);
  
  
  // Definindo métodos para objeto Pessoa atribuindo-os ao objeto.
  // Todos os objetos do tipo Pessoa herdam os métodos.
    
  
  Pessoa.prototype.showNomeCompleto = function() {
      return `${this.nome} ${this.sobrenome}`;
  };
  console.log(`nome completo ${pessoa.showNomeCompleto()}`);
  
  
  // Outra forma de difinir métodos para o objeto pessoa.
  
  Pessoa.prototype['showPrimeiroNome'] = function() {
    return this.nome;
  }
  console.log(`primeiro nome ${pessoa.showPrimeiroNome()}`);
