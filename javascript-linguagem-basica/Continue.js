// Array de números inteiros para testes
const numeros = [1,2,3,4,5,6];

// percorre o array de inteiros com o laço for of
for(let numero of numeros){
    if(numero === 2){
        continue; // devolve o controle para o laço
    }             // quando numero for igual a 2
    console.log(numero);
}
