/* Definindo, Testando, Manipulando  de objetos em Javascript. */



const objeto = {                                        // definindo um objeto javascript.
    propriedade1: 'string1',
    propriedade2: 'string2',
    propriedade3: 'string3',
    propriedade4: 'string4',
}
console.log(objeto);


objeto.propriedade5 = 'string5';                  // atribui uma nova propriedade ao objeto.
objeto['propriedade6'] = 'string6';
console.log(objeto);                



objeto.objetoComoPropriedade = {              // atribui outro objeto como propriedade do objeto.
    outraPropriedade1:'string7',
    outraPropriedade2:'string8',
    outraPropriedade3:'string9'
}
console.log(objeto);


objeto.propriedade7 = function somar(x,y){  // atribui uma função como propriedade do objeto.
    return x + y;
}
console.log(objeto);
const total = objeto.propriedade7(4,5);
console.log(total); // 9


const deletado = delete objeto.propriedade1;                //  Operador delete, deleta a propriedade do objeto.
delete objeto['propriedade2'];     
console.log(objeto);
console.log(deletado); // true.


const  existe = "objetoComoPropriedade" in objeto;        // Operador in testa se a propriedade existe no objeto.
console.log(existe);// true


const isToString = "toString" in objeto;                        // Propriedade toString herdada do objeto global.
console.log(isToString);// true


const isPropriedade5 = objeto.hasOwnProperty('propriedade5');                // hasOwnProperty testa propriedade.
console.log(isPropriedade5); // true.


const isPropriedade6 = objeto.propertyIsEnumerable('propriedade6');     // propertyIsEnmerable testa propriedade.
console.log(isPropriedade6); // true.

const isUndefined = objeto.propriedade4 !== undefined;  // Testa a propriedade retorna true se não for undefined.
console.log(isUndefined); // true


const keys = Object.keys(objeto);                       // retorna uma array com o nome de todas as propriedades.
console.log(keys);

const array = [1,2];
array.unshift(3,4);                                             // unshift insere os elementos no início do array.
console.log(array);

