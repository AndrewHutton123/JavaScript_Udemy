'use strict';

//First Challenge

//Second Challenge

//Third Challenge

//Forth Challenge

/*Function declaration
function fruitProcessor(apples, oranges) {
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(3,4);
console.log(appleJuice);
*/
//Fucntion expression
const calcAge1 = function(birthYear){
    const age = 2021 - birthYear;
    return age;
}

//Arrow Function
const yearsUntilRetirment = (birthYear,firstName) => {
    const age = 2021 - birthYear;
    const retirment = 65 - age;
    return `${firstName} retires in ${retirment} years`;
}
console.log(yearsUntilRetirment(1999, 'Andy'));

//Functions Calling Other Functions

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(4,5));