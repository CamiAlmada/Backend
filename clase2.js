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
	}
]
	let newArray =[]


    objetos.forEach((objetos)=>{
        const keys = Object.keys(objetos);
        keys.forEach((key) =>{

            if(!newArray.includes(key)) newArray.push(key);

        });
    });



    console.log(newArray)
    let totalVendido = 0;
    objetos.forEach((objeto) => {	const values = Object.values(objeto);
        	totalVendido += values.reduce((actual, acumulado) => actual + acumulado);});
            console.log(totalVendido);
