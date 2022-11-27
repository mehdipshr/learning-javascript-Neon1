const person = {name:"moh", age: 25};
const colors =['red' , 'green' , 'blue'];

/* for in loop */
// 1
for (let key in person){
    // console.log(key);
    console.log(person[key]);
}

// 2
// for(let index in colors){
//     // console.log(index);
//     console.log(colors[index,2]);
// }



/* for of loop */

for(let color of colors){
    console.log(color);

}