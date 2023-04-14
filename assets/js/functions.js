function suma() {

 var num1 = parseInt(prompt("Ingrese el primer Número"));
  var num2 = parseInt(prompt("Ingrese el Segundo Número"));
  var resultado = num1 + num2;
  var miVariable = "El resultado de la Suma es :" + resultado+ " y los números ingresados fueron "+ num1+" y "+num2;
  document.getElementById("miParrafo").innerHTML = miVariable;
}
function resta() {
      var num1 = parseInt(prompt("Ingrese el primer Número"));
  var num2 = parseInt(prompt("Ingrese el Segundo Número"));
  var resultado = num1 - num2;
  var miVariable = "El resultado de la Resta es :" + resultado+ " y los números ingresados fueron "+ num1+" y "+num2;
  document.getElementById("miParrafo").innerHTML = miVariable;
}
function multiplicacion() {
      var num1 = parseInt(prompt("Ingrese el primer Número"));
  var num2 = parseInt(prompt("Ingrese el Segundo Número"));
  var resultado = num1 * num2;
  var miVariable = "El resultado de la Multiplicación es :" + resultado+ " y los números ingresados fueron "+ num1+" y "+num2;
  document.getElementById("miParrafo").innerHTML = miVariable;
}
function division() {
     var num1 = parseInt(prompt("Ingrese el primer Número"));
  var num2 = parseInt(prompt("Ingrese el Segundo Número"));
  var resultado = num1 / num2;
   var miVariable = "El resultado de la División es :" + resultado+ " y los números ingresados fueron "+ num1+" y "+num2;
  document.getElementById("miParrafo").innerHTML = miVariable;
}
function grados(){
    var num1 = parseInt(prompt("Ingrese Grados Celsius"));
var kelvin = (num1 + 273.15);
var fahreng = ((num1 * (9/5))+32);
var miVariable1 = num1 + " Grados celsius, corresponde a: " + kelvin + " Grados Kelvin";
document.getElementById("miParrafo5").innerHTML = miVariable1;
var miVariable2 = num1 + " Grados Celsius, corresponde a: " + fahreng +" Grados Fahrenheit";
document.getElementById("miParrafo6").innerHTML = miVariable2;

}

function varios() {
    var num1 = parseInt(prompt("Ingrese el primer Número"));
    var num2 = parseInt(prompt("Ingrese el Segundo Número"));
    var resultado1 = num1 + num2;
    var resultado2 = num1 - num2;
    var resultado3 = num1 * num2;
    var resultado4 = num1 / num2;
  var miVariable1 = "El resultado de la Suma es :" + resultado1;
  document.getElementById("miParrafo1").innerHTML = miVariable1;
  var miVariable2 = "El resultado de la Resta es :" + resultado2;
  document.getElementById("miParrafo2").innerHTML = miVariable2;
  var miVariable3 = "El resultado de la Multiplicación es :" + resultado3;
  document.getElementById("miParrafo3").innerHTML = miVariable3;
  var miVariable4 = "El resultado de la División es :" + resultado4;
  document.getElementById("miParrafo4").innerHTML = miVariable4+ 
   " y los números ingresados fueron "+ num1+" y "+num2;
}

function numeros() {
var num1 = parseInt(prompt("Ingrese el primer Número"));
var num2 = parseInt(prompt("Ingrese el Segundo Número"));
var num3 = parseInt(prompt("Ingrese el Tercer Número"));
var num4 = parseInt(prompt("Ingrese el Cuarto  Número"));
var num5 = parseInt(prompt("Ingrese el Quinto Número"));
var sumados = num1 + num2 + num3 +num4 + num5;
var promedios = (num1 + num2 + num3 +num4 + num5)/5;
var miVariable = "El resultado de la Suma de todos los Números es: "+ sumados;
document.getElementById("miParrafo7").innerHTML = miVariable;
var miVariable2 ="El Promedio de los Números es: " + promedios;
document.getElementById("miParrafo8").innerHTML = miVariable2;
var numeroso = "Los números ingresados fueron: "+ num1+"-"+ num2+"-" + num3+"-" +num4+"-" + num5;
document.getElementById("miParrafo9").innerHTML = numeroso;
}

function dias(){
  var num1 = parseInt(prompt("Ingrese una Cantidad de Días"));
var anios = Math.floor (num1 /365);
var semanas = Math.floor ((num1 % 365) / 7);
var numDias = num1 - ((anios * 365) + (semanas * 7));
var miVariable1 = num1 + " Dias, que equivalen a " + anios +" Años, "+ semanas + " Semanas, y "+ numDias +" Dias Restantes";
document.getElementById("miParrafo10").innerHTML = miVariable1;

}