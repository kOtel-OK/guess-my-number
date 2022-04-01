'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('No number!');

    //When player wins
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    //When number too hight or too low
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too hight!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('GAME OVER!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.number').textContent = '?';
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
