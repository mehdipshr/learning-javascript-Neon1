//value types(* primitive *)

// 1 Number
// 2 String
// 3 Boolean
// 4 Symbol
// 5 undefined
// 6 null 

// Reference types
// 1 - Object
// 2 - Function
// 3 - Array


// example 1
// let x = {value: 10};
// let y = x;

// x.value= 20;

// console.log(y);


// example 2
let obj = {value : 10};
function increase(obj){
    obj.value++;
    // console.log(obj);
}
increase(obj);
console.log(obj);