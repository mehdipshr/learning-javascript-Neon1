function createCircle(radius ){
    return{
        radius,
        draw(){console.log('draw')}
    }
}


// constructor fconst 

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
    
}
const another = new Circle(3)
console.log(another);

const circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
`)
const circle = new circle1(5)
console.log(circle);
