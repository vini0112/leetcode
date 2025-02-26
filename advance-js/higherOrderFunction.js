
//  PASSING A FUNCTION AS AN ARGUMENT

function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}
function sayGoodbye() {console.log("Goodbye!");}
// greet("Alice", sayGoodbye);


// RETURNING A FUNCTION
function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}
const myfunc = multiplyBy(2) // factor
console.log(myfunc(3)) // number



