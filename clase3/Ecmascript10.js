// let cadena1 = "        hola "

// console.log(cadena1);
// console.log(cadena1.trim());

// let intencionDeMensaje = "                    "
// if (intencionDeMensaje.trim().length >0){
//     console.log("Es un mensaje util");
// }
// else{
//     console.log("No es un mensaje util");
// }

// let arrayAnidado = [1, 2,[4,5,6] , 9,10,[5,8]]

// console.log(arrayAnidado);
// console.log(arrayAnidado.flat());

let mensaje =[]

let intencion= "   hola"
if(intencion.trim().length>0){
    mensaje.push(intencion.trim())
    console.log(mensaje);
}

else{
    console.log("No hay mensaje");
}