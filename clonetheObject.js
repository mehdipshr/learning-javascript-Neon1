const circle = {
    radius : 1 ,
    draw(){
        console.log('draw');
    }
}
// old way
// const another = {};
// for(key in circle){
//     another[key] = circle[key]
// }
// console.log(another);

// const another = Object.assign({color : 'red'} , circle) /* object aval mitone khali ham bashe , dar sorate ezafe kardane info jadid mitone por beshe */


// const another = {color : 'red' ,...circle} /* example */z
const another = {...circle} /* 3 noghte ... mige tamame property ha va method haye circle ro dae biyar va dar const gharar bede */

console.log(another);