// Array de clientes para os testes de iteração
let clientes = [
    {
        nome:'José',
        sobrenome:'dos Santos',
    },
    {
        nome:'João',
        sobrenome:'da Silva',
    },
    {
        nome:'Maria',
        sobrenome:'dos Santos',
    },
    {
        nome:'Paula',
        sobrenome:'de Souza',
    }
];

// Usando o laço for of para iterar o array de clientes
console.log('\n\nIterando com For of');
for(let cliente of clientes){
    console.log('Nome do cliente: ',cliente.nome,cliente.sobrenome);
}
