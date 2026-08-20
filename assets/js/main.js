const nome = prompt ("Digite seu nome");
const sobrenome = prompt ("Digite seu sobrenome");

const agora = new Date();

const dia = agora.getDate();
let mes = agora.getMonth()+ 1;
const ano = agora.getFullYear();

let hora = agora.getHours();
let minuto = agora.getMinutes();

if (dia < 10) dia = "0" + dia;
if (mes < 10) mes = "0" + mes;
if (hora < 10) hora = "0 " + hora;
if (minuto < 10) minuto = "0" + minuto;

console.log(nome + " " + sobrenome + "\nQuinta-Feira, " + dia + "/" + mes + "/" + ano + " - " + hora + ":" + minuto + "(-03:00)");