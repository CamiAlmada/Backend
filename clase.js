    // class Persona{
    //     constructor(nombre){
    //         this.nombre= nombre;
    //     }

    //     static raza= "humano"

    //     sayName(){
    //         console.log(this.nombre);
    //     }
    // }
    // const juan= new Persona("Martin");
    // const f = new Persona("Camila");

    // juan.sayName();
    // f.sayName();


    class Contador {
        static contadorGrupal=0;

        constructor(name){
            this.responsable = name
            this.contadorIndividual=0
        }

        contar(){
            this.contadorIndividual +=1
            Contador.contadorGrupal += 1
        }

        getResponsable (){
            return this.responsable
        }

        getCuentaIndividual(){

            return this.contadorIndividual

        }

        getCuentaGlobal(){

            return Contador.contadorGrupal

        }
    }

    const pepe = new Contador ("pepe")

    const jose = new Contador ("jose")

    console.log(pepe.getCuentaGlobal());
    console.log(pepe.getCuentaGlobal());
    console.log(jose.getCuentaIndividual());
    console.log(jose.getCuentaGlobal());

    pepe.contar()
    pepe.contar()

    console.log(pepe.getCuentaIndividual());
    console.log(pepe.getCuentaGlobal());

    jose.contar()
    jose.contar()   
    jose.contar()
    jose.contar()

    console.log(jose.getCuentaIndividual());
    console.log(jose.getCuentaGlobal());

