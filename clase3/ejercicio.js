// definir clase TicketManager tendra eventos que iniciara vacio,
// debe tenr una variable privada #precioBaseDeGanancia, el cual añadira un costo adic
// al precio del evento

//metodo GetEventos mostrara los eventos guardados

//metodo "agregarEventos" con los sig parametros *nombre, *lugar, *precio(agregar un 0.15 del vo)
//*capacidad(50x defecto) *fecha (hoy)
//el metodo debera crear campo id autoincrementable y campo "participantes" q iniciara
// con un arreglo vacio

//metodo "agregarUsuario" recibira id evento (debe existir agregar validaciones) id usuario
//el metodo debe evaluar q el evento exista y q el usuario no haya estado registrado
//si esta ok agregar el id ususario en el arreglo "participantes "

//metodo "ponerEventoEngira" id evento, nueva localidad, nueva fecha
//el metodo debe copiar el evento existente , con nueva localidad, nueva fecha, nuevo id,
// y participantes vacios(spread operator para el resto de propiedades )

class TicketManager{

    #precioBaseDeGanancia = 0.15;
    #id = 0;

    constructor (){
        this.eventos= [];
    }

    getEventos(){
        return this.eventos;
    }

    agregarEventos(nombre, lugar,precio, capacidad=50, fecha= new Date()){

        const evento = {
            nombre,
            lugar, 
            precio: precio + precio*this.#precioBaseDeGanancia,
            capacidad,
            fecha,
            participantes : [],

            };  

            evento.id= this.#getId()

            this.eventos.push(evento)
    }

    #getId(){
        const oldId= this.#id ;
        this.#id+=1
       
        return oldId
    }

    agregarUsuario(idEvento, idUsuario){
      
        const eventoIndex= this.eventos.findIndex((evento)=> evento.id ===idEvento)

        if(eventoIndex === -1){
            console.log("No existe el evento");
            return;
        }
        const evento = this.eventos[eventoIndex]

        if(evento.participantes.includes(idUsuario)){
            console.log("Ese usuario ya existe");
            return
        }

        evento.participantes.push(idUsuario)
        
    }

    ponerEventosEnGira(idEvento, nuevaLocalidad, nuevaFecha){

        const eventoIndex= this.eventos.findIndex((evento)=> evento.id ===idEvento)

        if(eventoIndex===-1){
            console.log("No  existe el evento");
            return;
        }

        const evento = this.eventos[eventoIndex]

        const newEvento={
            ...evento,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            id:this.#getId(),
            participantes:[],
        }

        this.eventos.push(newEvento)
    }
}

const tm = new TicketManager()
tm.agregarEventos("evento coder 1", "Portugal", 200, 50)

tm.agregarUsuario(0,1)
tm.ponerEventosEnGira(0,"Mexico", new Date())
    

console.log(tm.getEventos());