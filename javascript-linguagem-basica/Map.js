let numeros = [1,2,3,4,5];
let dobro = [];

// DUPLICANDO OS ELEMENTOS NA FORMA ANTIGA
for(let i = 0; i < numeros.length; i++){
    dobro.push(numeros[i]*2);
}
console.log(numeros);
console.log(dobro);

// DUPLICANDO OS ELEMENTOS USANDO O MÉTODO MAP
dobro = numeros.map((numero)=>{
    return numero*2;
});
console.log(dobro);
console.log(numeros);
