/*const ESPACIO = ' ';
let nombre = prompt('Ingrese su nombre Aqui');
let apellido = prompt('Ingrese su apellido Aqui');
let mensajeBienvenida = 'Bienvenido a mi App' + ESPACIO + nombre + ESPACIO + apellido;
alert(mensajeBienvenida)*/

alert("Bienvenido a Tuentrada.com");
alert("Ingresa tus Datos a continuacion para reservar tu Entrada!");
let nombreCompleto = prompt("Nombre y Apellido").toUpperCase();
let edad = parseInt(prompt("Ingrese su edad"));
let validarEdad = (edad>=18);
let concierto = prompt("A-Duki B-Lgante C-Brigado");


switch(concierto){
    case "A-Duki":
        alert("Has Seleccionado Entradas para Duki")
        break

    case "B-Lgante":
        alert("Has Seleccionado Entradas para Lgante")
        break


    case "C-Brigado":
        alert("Has Seleccionado Entradas para Brigado")
        break   

}







/*
if(validarEdad){
    alert("Ingrese el concierto al cual quiere acceder")

    concierto = (prompt("Seleccione una opcion"))
}
*/