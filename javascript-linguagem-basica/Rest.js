/*
    USANDO O OPERADOR REST
*/

// USANDO OPERADOR REST PARA REALIZAR A SOMA DE UM NÚMERO DE PARÂMETROS DESCONHECIDOS 
// PASSADOS PARA UMA FUNÇÃO E MULTIPLICANDO POR OUTRO NÚMERO QUALQUER    
function somaTudoEmultiplica(multiplicador, ...valores) {
    return valores.reduce((soma, valor) => {
      return soma + (valor * multiplicador);
    }, 0);
  }
  console.log(somaTudoEmultiplica(4, 6, 2));
  console.log(somaTudoEmultiplica(2, 1, 4, 5, 6, 7));

  // MONTANDO QUERY SQL DE FORMA DINÂMICA USANDO O OPERADOR REST
  function createDynamicQuerySql(tabela, ...colunas){
      let colunasQuery = '';
      if(colunas.length > 0){
         colunasQuery = colunas.reduce((colunasQuery,coluna) => {
             return colunasQuery+= `${coluna}, `;
         },'');
         colunasQuery = colunasQuery.substring(0,colunasQuery.length -2);
      }else{
          colunasQuery = '*';
      }
      return `SELECT ${colunasQuery} FROM ${tabela}`;
  }
  console.log(createDynamicQuerySql('clientes','nome','sobrenome','idade'));
  console.log(createDynamicQuerySql('Produtos','descricao','valor'));
  console.log(createDynamicQuerySql('pedidos','numero'));
