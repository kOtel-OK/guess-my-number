'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable
console.log(secretNumber);

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    //When number too hight
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too hight!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }
    //When number to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
