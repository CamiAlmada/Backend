// const impuestos = {
//     impuesto1:300,
//     impuesto2: 500,
//     impuesto3:1500,

// };

// let claveValor= Object.entries(impuestos);
// console.log(claveValor);

// let valor= Object.values(impuestos);
// console.log(valor);

// let claves = Object.keys (impuestos);
// console.log(claves);

// let totalAPagar = valor.reduce((valor, acumulado)=>acumulado + valor) //llegamos al mismo valor si ponemos primero valor + acumulado
// console.log(totalAPagar);

const objetos =  [

	{

		manzanas:3,

		peras:2,

		carne:1,

		jugos:5,

		dulces:2

	},

	{

		manzanas:1,

		sandias:1,

		huevos:6,

		jugos:1,

		panes:4

	} ]

  

    let newArray = []

    objetos.forEach((objeto)=>{

        const keys = Object.keys(objeto)
         keys.forEach((key)=>{
            if(!newArray.includes(key))newArray.push(key);
         });

    })

    console.log(newArray);
    

  let totalVendido=0;

  objetos.forEach((objeto)=>{
    const values = Object.values(objeto);
    totalVendido += values.reduce((actual, acumulado)=> actual + acumulado);

  })

  console.log(totalVendido);


  const listaNueva= {...objetos[0], ...objetos[1]}
  console.log(Object.keys(listaNueva));

let newArray2

objetos.forEach((objeto)=>{
    newArray2= {...newArray2, ...objeto}
})

console.log(Object.keys(newArray2));

console.log(objetos.flat());