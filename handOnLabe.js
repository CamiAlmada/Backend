// const myList = [1,2,3]

// function checkList(list, objet){

//     let found = false;

//     list.forEach((elem)=>{
//         found = found  ||   elem === objet;  })
//         return found
// }

// console.log(checkList(myList, 2));
// console.log(checkList(myList, 8));

// const lista= [2,3,4,5]

// function mostrarLista(list){
//  const cantElem= list.length;

//  if(cantElem){
//     list.forEach((element) => {
//         console.log(element);
        
//     });
//  }

//  else{
//     console.log("Lista vacia");
//  }

//  return `Cantidad de elementos : ${cantElem}`
// }


// console.log(mostrarLista([]));
// console.log(mostrarLista([1,"pepe"]));

const lista= [2,3,4,5]

function mostrarLista(element){
 
 if(lista.includes (element) ){
   
        console.log(element);
        
    
 }

 else{s
    console.log("Lista vacia");
 }

 return `Cantidad de elementos : ${element}`
}


console.log(mostrarLista([]));
console.log(mostrarLista([1,"pepe"]));