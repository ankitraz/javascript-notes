const circle = {
    radius: 1,
}

circle.color = 'yellow'  // adding member dynamically to the objects
circle.draw = function(){} 

// deleting members dynamically of the objects
delete circle.color;
delete circle.draw;

console.log(circle)


// one thing we notice that we should notice that here our object circle is declared const but how are we able to modify it.
// well const before circle means we can't reassing this 'circle' object to any new object.