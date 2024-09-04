function suma (n1,n2){

    return parseInt(n1)+parseInt(n2);
}


let numero1 = prompt("Ingresa el primer numero a sumar ");
let numero2 = prompt("Ingresa el segundo numero a sumar: ");
let resultado = suma(numero1,numero2);
console.log("El resultado de: " + numero1 + " + " + numero2 + " es: " +resultado);