// Funções matemáticas do objeto Math

const _numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4.5, 7.9, -9, 0.7];    // array de números para testes.


const _pow  = Math.pow(_numbers[2],2);                                  // 3 elevado ao quadrado.
console.log('elevado ao quadrado', _pow);                               // 9


const _round = Math.round(_numbers[10]);                                // arredondamento para o mais próximo.
console.log('arredondado para o mais próximo', _round);                 // 5


const _ceil = Math.ceil(_numbers[_numbers.length - 1]);                  // arredondamento para cima.
console.log('arredondado para cima ', _ceil);                           // 1.0


const _floor = Math.floor(_numbers[_numbers.length - 1]);               // arredondamento para baixo.    
console.log('arredondado para baixo', _floor);                          // 0


const _abs = Math.abs(_numbers[12]);                                    // valor absoluto
console.log('valor absoluto', _abs)                                     // 5


const _max = Math.max(_numbers[9], _numbers[5], _numbers[8]);           // retorna o maior dos elementos.
console.log('maior valor', _max);                                       // 10  


const _min = Math.min(_numbers[9], _numbers[5], _numbers[8]);            // retorna o menor dos elementos.
console.log('monor valor', _min);                                        // 6  


const _random = Math.random();                                          // pseudo-aleatório > 0  e mnor que 1 
console.log(`um aleatório menor que 1 e maior que 0${_random}`);        // aleatório


const _PI = Math.PI                                                     // A constante PI (3.141592653589793).
console.log(`A constante PI ${_PI}`);


const _E = Math.E                                                       // A constante de Euler (2.718281828459045).
console.log(`A constante Euler ${_E}`);


const _sqrt = Math.sqrt(_numbers[3]);                                   // A raiz quadrada
console.log(`Raiz quadrada de ${_numbers[3]}:`, _sqrt);                 // 2


const _cubica = Math.pow(6, 1/3);                                       // raiz cubica de 6
console.log('Raiz cubica de 6 ', _cubica);                              // 1.8171205928321397 


const _seno = Math.sin(45);                                             // seno de 45° outros Math.cos, Math. atan, etc
console.log(_seno);                                                     // 0.8509035245341184






