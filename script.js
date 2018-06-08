// Declare a new function named favMovie that takes in one parameter.
// Inside the function log a message to the console that tells the user what your favorite movie is.
/* function favMovie(movie = 'The Room', name = 'world'){
    console.log(`My name is ${name} and fav movie is ${movie}`);
   
} */

// Call the function
// Now pass in the argument, your favorite movie, when you call the function, update the parameter of the function to have a default value of “The Room”.
// favMovie('Space Jam');

// Call the function without passing a movie name of your own,
// Add another parameter to your function so you can pass it a name, give this parameter a default value of “world”
// Update the string so that you include your name in the message.
// Call function favMovie by passing it values for both a movie and a name, and also call it without passing it anything.

/* favMovie('Space Jam','Kimani'); */

// Arrow Functions

// Change the favMovie function to an ES6 Arrow Function.


/* let favMovie = (movie = 'The Room', name = 'world') => {
    console.log(`My name is ${name} and fav movie is ${movie}`);
   
} */
// Call the function
// Use the shorthand "concise body" syntax for this arrow function so that the console.log statement is on the same line as the arrow.

let favMovie = (movie = 'The Room', name = 'world') =>
    console.log(`My name is ${name} and fav movie is ${movie}`);



favMovie();

// Create a new arrow function called getFirstName
let fullName = ['Kimani', 'Walker'];

let getFirstName = () => {
    console.log(fullName[0]);
}

// Create a second arrow function using the concise body syntax. Both function will serve the same purpose.

let getLastName = () => console.log(fullName[1]);

getFirstName();
getLastName();

// Create a new function that will take in two parameters and return an object literal.
// It should have two properties, the exponent result (x^y) and the product of the two numbers.
// Log each property using a template literal.

let functotal = (x, y) => {
    let sumtotal = (x + y)
    let producttotal = (x * y)
    let expototal = (x ^ y)
    let divtotal = (x / y)

    console.log(`The total is ${sumtotal}`)
    console.log(`The product total is ${producttotal}`)
    console.log(`The exponent total is ${expototal}`)
    console.log(`The division total is ${divtotal}`)
}

functotal(4,2);


// Write a function that takes 3 parameters: name, location, favFood.
// Create an array with 3 values, have the values match the order of the 3 parameters. Ex. let arr = [“Paul”, “Birmingham”, “Kimchi”];

let infoarray = ["Paul", "Birmingham" ,"Kimichi"];

let info = (name, location, favFood) => {
console.log(...infoarray)
}

info();

// Create a variable that has a value of your name.
let names = ['Kimani'];

// Write a function that takes a parameter, name the parameter whatever you’d like.
// Using spread syntax, create a variable in the function that takes the string you pass into the function and spreads it into an array.
// Using a for loop, loop through the spread string and console log each value of the string.
function namesparam() {
    let passtring = 'Joe';
    names.push(passtring); 
    console.log(...names);
}

namesparam();



