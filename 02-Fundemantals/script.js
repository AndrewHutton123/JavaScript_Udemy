'use strict';

//First Challenge
const calcAverage = (score1,score2,score3) => (score1 + score2 + score3) / 3;

const dolphinAverage = calcAverage(44,23,71)
const koalasAverage = calcAverage(65,54,49)

checkWinner(dolphinAverage,koalasAverage);
function checkWinner(dolphinAverage,koalasAverage){
    if (dolphinAverage >= 2 * koalasAverage ){
        console.log(`Dolphins win (${dolphinAverage} vs ${koalasAverage})`);
    }
    else if(dolphinAverage <= 2 * koalasAverage){
        console.log(`Koalas win (${dolphinAverage} vs ${koalasAverage})`);
    }else{
        console.log(`No one wins`)
    }
}


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