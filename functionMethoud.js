function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
    
}

// in 2 ta line har 2 yeki hastan
const another = new Circle(3);
Circle.call( {} , 9)
