function suma (a,b,callback){
    let c= a + b
    callback()
}
/*
El 3er parámetro recibido es una función de callback.
Es obligatorio para las operaciónes asincrónicas o cuando quiero que un código se ejecute después de que una operación termine de ejecutar.
*/
suma(3, 4, function() {
  console.log("La suma termino de ejecutar");
});