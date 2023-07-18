// every object in js have a property that references the function that was used to construct that object.


// Factory function
function createCircle(radius) {
    return {
        radius,    
        draw(){
            console.log('Draw');
        }
    };
}
const circle1 = createCircle(1);


// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function (){ console.log('draw');}
}
const circle2 = new Circle(1);




console.log(circle1.constructor);
console.log(circle2.constructor);