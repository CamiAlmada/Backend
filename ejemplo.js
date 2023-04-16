const familia=[moni, cele, ana, cata, mila]

function mostrarLista (list){
   const cantElem = list.lenght;
   if(cantElem){
    list.forEach((element) => {
        console.log(element);
        
    });

}
    else{
        console.log("Lista vacia")
    }
   return `"Cantidad de elementos": ${cantElem}`;
}

console.log(mostrarLista([]));
console.log(mostrarLista([1, "pepe",null,undefined]));
