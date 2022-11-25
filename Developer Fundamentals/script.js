// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/// Baya iyi Baya Önemli
/*const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") {
      continue;
    }
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};

const aplitude = calcTempAmplitude(temperatures);
console.log(aplitude);

//Proglem 2 Funtion should now receive 2 arrays of temps

const temps = t1.concat(t2);

const calcTempAmplitudeNew = function (t1, t2) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") {
      continue;
    }
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};

const amplitude = calcTempAmplitudeNew(temperatures);
console.log(amplitude);
*/
// const mesaureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     // value: Number(prompt("Degrees celsius:")),
//   };
//   console.log(measurement);
//   //   console.table(measurement);

//   //   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(mesaureKelvin());

// //A)Identify the bug
// // Using a debugger
/*const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];er

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") {
      continue;
    }
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/

// CODİNG CHALLANGE DEBUG*
/*  Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// PROBLEM
//What is the x Days

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}C in ${i + 1} days...`;
  }
  console.log("..." + str);
};
printForecast(data2);
