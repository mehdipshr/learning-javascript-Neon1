const circle = {
    radius : 1
}
circle.color = "red";
circle.draw = function(){
    console.log("web");
}
delete circle.radius;
delete circle.draw
console.log(circle);
