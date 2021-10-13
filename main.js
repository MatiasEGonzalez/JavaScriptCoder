/*const ESPACIO = ' ';
let nombre = prompt('Ingrese su nombre Aqui');
let apellido = prompt('Ingrese su apellido Aqui');
let mensajeBienvenida = 'Bienvenido a mi App' + ESPACIO + nombre + ESPACIO + apellido;
alert(mensajeBienvenida)*/


alert("Bienvenido a Tuentrada.com");
alert("Ingresá tus Datos a continuacion para reservar tu Entrada!");
let nombreCompleto = prompt("Nombre y Apellido").toUpperCase();
if (nombreCompleto != ""){
  alert("bienvenido" + " " + nombreCompleto );

}
if(nombreCompleto == ""){
  alert("ingrese su nombre completo para continuar por favor.");
  let nombreCompleto = prompt("Nombre y Apellido").toUpperCase();
  alert("bienvenido" + " " + nombreCompleto );
}
let edad = parseInt(prompt("Ingrese su edad (solo mayores de 18)"));
let validarEdad = edad >= 18;
let entradas = 1;
do{
if (validarEdad) {
  let concierto = prompt("A-Duki B-Lgante C-Brigado").toLowerCase();
  if (concierto == "a") {
    entradas= parseInt(prompt("ingrese la cantidad de entradas que quiera comprar"))
    alert("Felicitaciones has seleccionado" + " " +  entradas + " " + "entradas para ver al Duki");
    if (!Number.isInteger(entradas)) {
      alert("Nro de entradas debe ser numerico");
      entradas= parseInt(prompt("ingrese la cantidad de entradas que quiera comprar"))

      alert("Felicitaciones has seleccionado" + " " +  entradas + " " + "entradas para ver al Duki");
    }
  } else if (concierto == "b") {
    entradas= parseInt(prompt("ingrese la cantidad de entradas que quiera comprar"))
    alert("Felicitaciones has seleccionado " + " " +  entradas + " " + "entradas para ver al Lgante");
    if (!Number.isInteger(entradas)) {
      alert("Nro de entradas debe ser numerico");
      entradas= parseInt(prompt("ingrese la cantidad de entradas que quiera comprar"))

      alert("Felicitaciones has seleccionado " + " " +  entradas + " " + "entradas para ver al Lgante");
    }
  } else if (concierto == "c") {
    entradas= parseInt(prompt("ingrese la cantidad de entradas que quiera comprar"))
    alert("Felicitaciones has seleccionado " + " " +  entradas + " " + "entradas para ver al Brigado");
    if (!Number.isInteger(entradas)) {
      alert("Nro de entradas debe ser numerico");
      entradas= parseInt(prompt("ingrese la cantidad de entradas que quiera comprar"))

      alert("Felicitaciones has seleccionado " + " " +  entradas + " " + "entradas para ver al Brigado");
    }
  }
  otraCompra = confirm("Quiere realizar otra compra?")
} else {
  alert("Usted no es mayor de edad! No puede realizar la compra!");
}

}while(otraCompra)
