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


