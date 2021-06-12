// Datas e horas Javascript


const agora = new Date();         // cria um instancia de Date com a data e hora atuais 
console.log(agora);               // data e hora atual ex: 2021-06-12T03:32:19.961Z


const  dataNascimento = new Date(1982, 8, 27);      // cria uma nova data com os valores fornecidos
console.log(dataNascimento);                        // 1982-09-27T03:00:00.000Z


const milissegundos = agora - dataNascimento;                // subtrai as datas e retorna o resultaado em milessegundos (1221525665560).
const idade = (milissegundos / (3.154 * (Math.pow(10,10)))); // 38.729431091439444  
console.log(Math.floor(idade));                              // arredonda para 38


const ano = dataNascimento.getFullYear();           // 1982
console.log(ano);                           


const mes = dataNascimento.getMonth()+1;            // 9
console.log(mes);                            


const dia = dataNascimento.getDate();               // 27
console.log(dia);

console.log(dataNascimento.toUTCString());          // Mon, 27 Sep 1982 03:00:00 GMT

console.log(dataNascimento.toLocaleDateString());   // 27/09/1982

console.log(agora.toLocaleTimeString());            // EX: 01:13:45



