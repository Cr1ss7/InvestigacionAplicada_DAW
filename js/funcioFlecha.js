alert("EJEMPLO.. ingrese 2 numeros para realizar una suma");
var  num1 = prompt("Ingree el primer numero a sumar");
var num2 = prompt("Igrese el segundo numero a sumar");

var numA = parseFloat(num1);
var numB = parseFloat(num2);

let sum = (num1, num2)=>{
    let result = num1 + num2;
   return result;
};
document.write(numA + " + " + numB + " = " + sum(numA,numB) + "<br>");
document.write("Resultado de la suma: " + sum(numA,numB));
