
do{
  const personal = {nombre: "homero ",
                      edad: "28",
                     calle: "Bv. chacabuco 660"};
  
  personal["nombre"] = prompt ("ingrese su nombre");
  personal.edad = prompt("ingrese su edad");
  personal.calle = prompt("ingrese su domicilio");
  
  
   alert ("Felicitaciones has creado tu membresia! "+"\n"+ "Nombre: " + personal.nombre +"\n" + "Edad: " + personal.edad +"\n" + "Domicilio: " + personal.calle );
   nuevaMembresia = confirm("Desea Realizar una nueva membresia?")
  }while(nuevaMembresia)
  

class Producto{
  constructor(nombre, precio, costoInicial){
    this.nombre = nombre;
    this.cantidad = parseFloat(precio);
    this.costo = parseFloat(costoInicial)
  }


  vender(cantidad){
    if (this.verificarCosto(cantidad)){
      cantidad = prompt("cuantas bebidas van a querer: ")
      
      this.costo = this.costo * cantidad;
      alert("el total es $" + this.costo + " en " + this.nombre);
      
    }/*else{
      alert("No hay suficente stock, cantidad disponible para vender: " + this.stock);
    }*/}
    verificarCosto(cantidad){
       //tengo disponible la cantidad a venderif 
       (this.costo >= cantidad );{
        return true;
      }
    }
  }
  const producto1 = new Producto("cervezas", 120  ,120);
  const producto2 = new Producto("fernet", 240 , 240);

  producto1.vender()
  producto2.vender()
  
