/*'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :)');
*/

// function logger() {

//     console.log('My name is Jonas');
// }

// logger();
/*
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 4);
console.log(appleJuice);

*/
'use strict';
//Function declaration
/*function calcAge1(birthYear) {
    return 2037 - birthYear;

}
const age1 = calcAge1(1991);
*/
// function expression
/*const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// ARROW FUNCTİOPN

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);*/
/*
const cutPieces = function (fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);


    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*************************************************************/
/*******BURADA 2 FONKSİYONU İÇ İÇE KULLANDIK */
/*const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;


    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement}`)
        return retirement;


    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
    return retirement   // return `${ firstName } retires in ${ retirement } years`;

}

console.log(yearUntilRetirement(1991, 'Onur'));
console.log(yearUntilRetirement(1950, 'Mike'));*/



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ARRAYS !!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008);

// Friends arrayınden ilk friendi almak için

console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length); // kAÇ ELEMENT OLDUGUNU GÖSTERİR
console.log(friends[friends.length - 1])

friends[2] = 'Jay';
console.log(friends);
const firstName = 'jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 25, 'teacher', friends]
console.log(jonas)
console.log(jonas, length);*/
/*  FONKSİYON
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1])]

console.log(ages);
*/
/*
const friends = ['Onur', 'Ugur', 'Busra'];
const newLength = friends.push('Jay'); // Sonuna ekler
console.log(friends);
console.log(friends.length);
console.log(newLength);

const newLength2 = friends.unshift('john'); // başına ekler

console.log(newLength2);

console.log(friends[0]);

// REMOVE ELEMENTS FROM ARRAYS :))

friends.pop(friends); // Removes the last element

console.log(friends.length);
friends.shift(friends);
console.log(friends.indexOf('Ugur'));

console.log(friends.includes('Ugur'));

if (friends.includes('Ugur')) {

    console.log('You have a friend named Ugur');
}*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Gulecoglu',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Onur', 'Jordan']

};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]); // ÖNEMLİ
console.log(jonas['last' + nameKey]);// ÖNEMLİ

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName , lastName,age, and friends');

console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Please choose a valid answer.Choose between firstName , lastName,age, and friends')
}

jonas.location = 'Turkey';
jonas['twitter'] = '@onurgulecoglu';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`)//!!!!!!!!!!! ÖNEMLİ
*/  //  
//
//                  OBJELEE FONKSİYON EKLEMEK THİS İLE ÇAĞIRMAK
//
//

/*const jonas = {
    firstName: 'Jonas',
    lastName: 'Gulecoglu',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Onur', 'Jordan'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has  a ${jonas.hasDriversLicense}`

    }
};*/


// console.log(jonas.getSummary());

//// CHALLENGE
//Jonas is a 46 year old teacher and he has no dirivers license YAZ

// LOOOOOOOOPPPPSSSSSS


// console.log('Lifting weights repetation 1');
// console.log('Lifting weights repetation 2');
// console.log('Lifting weights repetation 3');
// console.log('Lifting weights repetation 4');
// console.log('Lifting weights repetation 5');
// console.log('Lifting weights repetation 6');
// console.log('Lifting weights repetation 7');
// console.log('Lifting weights repetation 8');
// console.log('Lifting weights repetation 9');
// console.log('Lifting weights repetation 10');
// for loop keeps running while condition is TRUE
/*for (let rep = 1; rep <= 10; rep++) { // ++ 1 1 arttırır
    console.log(`Lifting weights repetation ${rep} `);

}*/

/*

const jonasArray = [
    'jonas',
    'svhemedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']

];

const types = [];
/////////////////////// BREAK AND CONTUNİE
for (let i = 0; i <= 4; i++) {
    console.log(jonasArray[i], typeof jonasArray);
    if (typeof jonasArray[i] !== 'string') continue;// bu da önemli eğer string ise devam et diyor değilse duruyor-- BReak dersek te oraya gelince duruyor

    types[i] = typeof jonasArray[i];
}
// i < jonas.lenght DİYEBİLİRİZ

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

*/
/* ////////////////// TEKRAR İÇ İÇE
const jonas = [
    'jonas',
    'Gulecoglu',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']

];

//0,1,,.....3.4
// 4,43,2,1,0 yapmak istiyoruz

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <= 4; exercise++) {

    console.log(`------------Starting ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
} // SIRAYLA TEKRAR EDİYOR ÖNCE EXERCİSE LOOPU ÇALIŞIYOR ARDINDAN REP LOOOPU ÇALIŞIYOR REP LOOPU BİTİNCE EXERCİSE LOOPUNA GERİ DÖNÜYOR
*/
/////////////////////////// WHİLE LOOP //////////////////

// for (let rep = 1; rep <= 16; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
// }
/*
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

// / /// /// /// WHİLE ÖNEMLİ ///
while (dice !== 6) {

    console.log(`You rolled ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('The loop is about to end');
    }

}*/

