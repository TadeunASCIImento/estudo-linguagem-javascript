// Array de discos para os testes de iteração
let pessoa =  {
    nome:'João',
    sobrenome:'da Silva',
    data_cadastro:new Date()
}
// Iterando sobre o objeto usando o for in
console.log('Iterando sobre o objeto usando for in');
for(let dado in pessoa){
    let info = pessoa[dado];
    console.log(dado,':',info);
}
