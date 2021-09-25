//Challenges
const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const jognHeight1 = 1.95;

const markBMI1 = markWeight1 / markHeight1 ** 2;
const johnBMI1 = johnWeight1 / jognHeight1 ** 2;

const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const jognHeight2 = 1.76;

const markBMI2 = markWeight2 / markHeight2 ** 2;
const johnBMI2 = johnWeight2 / jognHeight2 ** 2;

console.log(markBMI1,johnBMI1,markBMI2,johnBMI2);

const markHigherBMI1 = markBMI1 > johnBMI1;

const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI1,markHigherBMI2);

//Practice Code

const age = 19;


if(age >= 18) {
    console.log('Can Start Drving ')
} else{
    console.log('Cannot Drive')
}

//Second Challenge

if (markHigherBMI1 == true){
    console.log('Mark has the higher BMI')
} else{
    console.log('John has the Higher BMI')
}