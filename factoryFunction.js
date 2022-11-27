

// let circle ={
//     radius: 1,
//     location: {
//         x : 1,
//         y:1
//     },
//     isVisible :true,
//     draw: function(){console.log('draw')}
// };
// circle.draw()
//factory function


function createCircle(radius ){
    return{
        radius,
        draw(){console.log('draw')}
    }
}
let circle2 = createCircle(3);
console.log(circle2);

let circle1 = createCircle(1);
console.log(circle1);

www.iranidata.com