//-------------------------  Sexta Entrega-----------------
class Reserva{
    constructor(nombre,apellido,dia, hora ){
        this.nombre = nombre
        this.apellido = apellido
        this.dia = dia
        this.hora = hora
    }
}
let nombreReserva = ""
let apellidoReserva = ""
let diaReserva = 0
let horaReserva
let listadoReservas= []
function consultarDatosReserva(){
    nombreReserva= prompt("Ingrese el nombre").toUpperCase()
    apellidoReserva=prompt("Ingrese su apellido").toUpperCase()
    diaReserva = parseInt(prompt("Ingrese el dia para la reserva"))
    horaReserva = parseInt(prompt("Ingrese la hora de la reserva"))
}
function crearReserva() {
     const reserva = new Reserva(nombreReserva,apellidoReserva, diaReserva,horaReserva)
    
    listadoReservas.push(reserva)
   
   
}
function listarReservas(){
    console.log("Listado de reservas")
    for(let i = 0;i<listadoReservas.length;i++){
        
        console.log(listadoReservas[i])
        
    }
}
alert("Ingrese los datos para una nueva reserva")
function ejecutarReserva(){
    do{
        consultarDatosReserva()
        crearReserva()
        
        nuevaReserva = confirm("Desea realizar otra reserva?")
    }while(nuevaReserva)
}
//-------------------------Con desafio complementario-------------
function ordenarPorHora() {
    const listadoOrdenado = listadoReservas.sort((a,b) =>{
        return b.hora + a.hora 
    })
    console.log("Listado por hora, de menor a mayor")
    console.log(listadoOrdenado)
}
function ordenarPorNombre() {
    const listadoOrdenado =listadoReservas.sort((a,b) =>{
        if(a.nombre> b.nombre){
            return 1
        }else{
            return -1
        }
    })
    console.log("Listado por nombre de la A a la Z")
    console.log(listadoOrdenado)
}
ejecutarReserva()
listarReservas()
ordenarPorHora()
ordenarPorNombre()
