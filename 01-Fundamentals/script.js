//First Challenge
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


//Second Challenge

if (markHigherBMI1 == true){
    console.log('Mark has the higher BMI')
} else{
    console.log('John has the Higher BMI')
}

//Third Challenge

const dolphinScore = (96 + 108 + 89) / 3;
const koalasScore = (88 + 91 + 110) / 3

if (dolphinScore > koalasScore || dolphinScore < koalasScore){
    if(dolphinScore > koalasScore){
        console.log("Dolphins Win");
    }else{
        console.log("Koalas Win");
    }

}else{
    console.log("Its a draw");
}

const dolphinScore2 = (97 + 108 + 89) / 3;
const koalasScore2 = (109 + 95 + 123) / 3;

if (dolphinScore2 > koalasScore2 || dolphinScore2 < koalasScore2){
    if(dolphinScore2 > koalasScore2 && dolphinScore2 >= 100){
        console.log("Dolphins 2 Win");
    }else{
        if(koalasScore2 >= 100)
        console.log("Koalas 2 Win");
    }

}else{
    console.log("Its a draw");
}

//Forth Challenge

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15:
bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip}
and the total value is ${bill + tip}`)



