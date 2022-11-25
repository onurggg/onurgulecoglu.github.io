'use strict'
/* ASSİGNMENT 1 of PART 2
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);



const checkWinner = function (dolphinsAverage, koalasAverage) {

    if (dolphinsAverage > 2 * koalasAverage) {
        console.log(`Dolphins wins the match (${dolphinsAverage}-${koalasAverage})`);
    } else if (koalasAverage > 2 * dolphinsAverage) {
        console.log(`Koalas wins the match(${koalasAverage}-${dolphinsAverage})`);
    } else {
        console.log('Nobody wins the match');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

//Test 2

scoreDolphins = calcAverage(85, 54, 71);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
// // Önce calcaverage fonksiyonunu tanımladık
// Sonra let kullandık ki scoreDolphins i değiştirebilelim
// Checkwinner fonksiyonuna 2 parametre tanımladık (dolphinsAverage)
// Sonra bu parametreleri scoreDolphins e bağladık*/
/*

const calcTip = function (bill) {
    return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

}

console.log(calcTip(125));

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals); 0*/
// OBJECTTT  Coding Challange 3^//
/*
const mark = {
    fullName: 'Mark miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = (this.mass) / (this.height ** 2);
        return this.bmi
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = (this.mass) / (this.height ** 2);
        return this.bmi
    }
};

mark.calcBMI(); // önce markı çağırmamız gerekiyor
console.log(mark.bmi);
john.calcBMI()
console.log(john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log('Marks BMI is bigger than Johns BMI')
// }
// else { console.log('Johns BMI is bigger than Marks BMI') } OR

mark.bmi > john.bmi ? console.log('Marks BMI is bigger than Johns BMI') : console.log('Johns BMI is bigger than Marks BMI'); // BÖYLE DE YAPABİLİRSİN*/

//// FİNAL CODİNG CHALLANGE

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = function (bill) {
    return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

};

for (let i = 0; i <= bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(bills + tips);
};
console.log(tips);
console.log(total);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
}

console.log(calcAverage(total));*/

