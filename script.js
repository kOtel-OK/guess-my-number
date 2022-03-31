'use strict';
'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No number!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number!';
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too hight!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    score--;
    document.querySelector('.score').textContent = score;

    document.querySelector('.message').textContent = 'GAME OVER!';
  }
});
