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

const billArray = [125,555,44];

calcTip(billArray);
function calcTip(billValue){
    
    return billValue <= 300 && billValue >= 50 ? billValue * 0.15:
    billValue * 0.2;
    
}
const tips = [calcTip(billArray[0]), calcTip(billArray[1]), calcTip(billArray[2])]
console.log(billArray,tips);


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

//Intro To Arrays

const friends1 = ['Micheal','Steven','Peter'];
console.log(friends1);

//Array Operations: 
//.push adds to the end of an array, 
//.unshift adds to the front of the array
// .pop removes the last element from array
//.indexOf returns the position of the index with a number
//.includes checks if the element is in the array and returns a boolean result
const friends = ['Micheal','Steven','Peter'];
//.push returns the number of elements in the array
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');

friends.pop();

friends.indexOf('Micheal');

console.log(friends.includes('Steven'))

