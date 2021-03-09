// Array de inteiros de exemplo
const numeros = [1,2,3,4,5];

// percorre o array de inteiros usando for of
for(let numero of numeros){
    if(numero > 3) {
        break;// encerra o laço quando numero for
    }         // maior que 3.
    console.log(numero);
}
