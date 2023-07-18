const circle = {
    radius: 1, 
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('Draw');
    }
};

//factory functions  - they produce objects, they are the one way to create objects.
function createCircle(radius) {
    return {
        radius,                 // radius: radius, 


        draw(){
            console.log('Draw');
        }
        // draw: function () {
        //     console.log('Draw');
        // }
    };
}

// if our key and value are the same, we can make our code by removing a value and simply adding the key. just like line 16

const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();

const circle2 = createCircle(2);
console.log(circle2);


// difference b/w method and function
// if a function is a part of an object, we call it method. otherwise it's a function.