/*
Autor: Pamela Alejandra Benavides Sechslingloff
*/

const numeros = [10,20,30,40];  //arreglo original

const multiplicarNum = function(num){return num*10;}; //funcion para el map
const multiplicarNumArrow = num => num *10; //misma funcion en forma de arrow 

const nuevosNumeros = numeros.map(multiplicarNumArrow); //metodo map

for(let x of nuevosNumeros){console.log(x);} 

let totalReduce = nuevosNumeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0); //metodo reduce

console.log(totalReduce); 
