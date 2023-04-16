let prueba = 0
let valores = prueba || "sin valor"
console.log(valores);

let valor1= prueba ?? "sin valor"
console.log(valor1);

class Persona {


 #fullName ; 

    
    constructor (name, lastname){
        this.name=name;
        this.lastname = lastname;
        this.#fullName = `${name} ${lastname}`


    }
    
   getFullName (){
    return this.#fullName   

   }

   setFullName (p){
    this.#privado()
    this.#fullName= (p)
   }

   #privado(){
    console.log("esto es codigo privado");
   }
}

const instance =    new Persona("pepe", "zanches")

console.log(instance.getFullName())
instance.setFullName("cami")
console.log(instance.getFullName());