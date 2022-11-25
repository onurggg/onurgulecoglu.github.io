'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'You Won Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
// TO make the code dry we will create a function called display messsage

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
// When there is no inpt
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
    //When the player is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high' : 'Too low'; // TOO HİGH AND TOO LOW COMMENTED OUT. THİS İS EASİER
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You have lost the game');
    }
    //When Player Wins
  } else if (guess === secretNumber) {
    displayMessage('The number is Correct');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = score;

    score = score;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
  }
  // When guess is too high
  // } else if (guess > number) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'The number is Too High';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You have lost the game';
  //   }
  //   // when guess is low
  // } else if (guess < number) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'The Number is Too Low';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You have lost the game';
  //   }
  // }
});

document
  .querySelector('.again')
  .addEventListener('click', function refreshPage() {
    const refreshPage = window.location.reload();
    document.querySelector('.score').text;
  });

console.log(secretNumber);
