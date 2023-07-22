// used to create objects. construct an object
// camel notation: oneTwoThreeFour
// pascal Notation: OneTwoThreeFour --> usded in constructor function

// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function (){
        console.log('Draw');
    }
}


const circle1 = new Circle(1);
console.log(circle1);
circle1.draw();
