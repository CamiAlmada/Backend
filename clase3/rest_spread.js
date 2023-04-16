const objeto1 ={
    prop1:"a",
    prop2:123,
    prop3: false,


}

const objeto2={
        prop1: "d",
        prop2:[1,4,6,8]
}

let {prop1, prop2}= objeto1
console.log(prop1);
console.log(prop2);

let objeto3= {...objeto1, ...objeto2}; 
//... las variables internas y el ultimo pisa lo del primero si son iguales las prop

const objeto4={
    a:1,
    b:2,
    c:3,
};

let{a, ...rest}= objeto4
console.log(a);
console.log(rest);