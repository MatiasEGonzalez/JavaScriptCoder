/*const ESPACIO = ' ';
let nombre = prompt('Ingrese su nombre Aqui');
let apellido = prompt('Ingrese su apellido Aqui');
let mensajeBienvenida = 'Bienvenido a mi App' + ESPACIO + nombre + ESPACIO + apellido;
alert(mensajeBienvenida)*/
/*
let nombreCompleto;
function solicitarNombre (){
   nombreCompleto = prompt("Nombre y Apellido").toUpperCase();
  
}

alert("Bienvenido a Tuentrada.com");
alert("Ingresá tus Datos a continuacion para reservar tu Entrada!");
solicitarNombre ();
if (nombreCompleto != ""){
  alert("bienvenido" + " " + nombreCompleto );

}
if(nombreCompleto == ""){
  alert("ingrese su nombre completo para continuar por favor.");
  solicitarNombre ();
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

*/
let nombreCompleto
let horario
let edad
const precioPromo = 500
const costoReserva = 300

function solicitarNombre() {
  nombreCompleto = prompt("Ingrese su nombre completo por favor")
}

function solicitarEdad() {
    edad = parseInt(prompt("Ingrese su edad"))
}

function validarEdad() {
    let mayorDeEdad = (edad >= 18)
    if (mayorDeEdad == false) {
        return false
    } else {
        return true
    }
}

function registrarHorario() {
  horario = parseInt(prompt("Ingrese el horario. Ej: 18"))
}

function reservaNocturna() {
    if (horario >= 20 ) {
        confirmarReserva = confirm("A partir de las 20hrs, las reservas tienen un costo anticipado de $" + costoReserva + ".\n Desea continuar con la reserva?")
        if (confirmarReserva) {
            return true
        } else {
            return false
        }
    }
}

function confirmarPromo() {
    confirmar = confirm("Tenemos promos de tragos por un precio de $" + precioPromo + "\nDesea comprar alguna promo?")
    if (confirmar) {
        return true
    } else {
        return false
    }
}


function calcularPromo(cantidad) {

    const montoTotal = precioPromo * cantidad
    return montoTotal
}

function calcularMonto(cantidad) {
    const montoTotal = costoReserva + calcularPromo(cantidad)
    return montoTotal
}

function mostrarReserva() {


    let reserva = "Su reserva se ha registrado a nombre de: " + nombreCompleto
        + ".\nHorario de reserva:  " + horario + "hrs"
    let mensajeMonto = "\nSu total a pagar es de $"

    if (reservaNocturna()) {
        if (confirmarPromo()) {
            cantidad = parseInt(prompt("Ingrese la cantidad de tragos que desea comprar"))
            return reserva + mensajeMonto + calcularMonto(cantidad)
        } else {
            return reserva + mensajeMonto + costoReserva
        }
    } else {
        if (confirmarPromo()) {
            cantidad = parseInt(prompt("Ingrese la cantidad de tragos que desea comprar"))
            return reserva + mensajeMonto + calcularPromo(cantidad)
        } else {

            return reserva
        }
    }


}

alert("Bienvenido a Nuestro Bar")
do {
    alert("Ingrese los siguientes datos para una realizar una reserva")
    solicitarEdad()
    if (validarEdad() == true) {
        solicitarNombre();
        if (nombreCompleto != ""){
          alert("bienvenido" + " " + nombreCompleto );
        
        }
        if(nombreCompleto == ""){
          alert("ingrese su nombre completo para continuar por favor.");
          solicitarNombre ();
          alert("bienvenido" + " " + nombreCompleto );
        }
        registrarHorario();
        alert(mostrarReserva())

        nuevaReserva = confirm("Desea Realizar una nueva reserva?")
    } else {
        alert("Lo sentimos! Las reservas son solo para mayores de edad")
    }
} while (nuevaReserva) 