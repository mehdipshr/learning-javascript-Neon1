const circle = {
    radius: 1 ,
    draw(){
        console.log('draw');
    }
}

let circleKeys = Object.keys(circle);
console.log(circleKeys);

for(let key of circleKeys)
console.log(key);

let circ = Object.entries(circle)
console.log(circ);
for (let entry of circ){
    console.log(entry);
}

if('draw' in circle){
    console.log('yes');
    console.log('color' in circle);
}