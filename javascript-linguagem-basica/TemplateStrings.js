/*
    TEMPLATE STRINGS SIMPLES E MARCADOS
*/

// USANDO TEMPLATE STRINGS SIMPLES
const horas = new Date().getHours();
const minutos = new Date().getMinutes();
console.log(`São exatamente, ${horas} horas e ${minutos} minutos`);

// USANDO TEMPLATE STRINGS MARCADOS
const mensagem  = defineMensagem`${""}${horas} horas`;
console.log(mensagem);

function defineMensagem(strings, ...values){
    const hora = values[1];
    if(hora >= 6 && hora <= 12 ){
        values[0] = "Bom dia"
    }else if(hora > 12 && hora <= 18 ){
        values[0] = "Boa Tarde";
    }else{
        values[0] = "Boa Noite";
    }
    values[0] = `${values[0]},são`;
    return `${values[0]} ${strings[0]}${hora}${strings[2]}`
}
