'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.score').textContent = '10';
document.querySelector('.number').textContent = '13';
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

/*
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when Your wins
  if (!guess) {
    document.querySelector('.message').textContent = 'No Input Number...';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number...';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When Gewss is TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'No. Too High...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the Game!!';
      document.querySelector('.score').textContent = 0;
    }
    // When Gewss is TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'No. Too Low...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the Game...';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//ACTION ON AGAIN BUTTON WHEN CLICKED
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  Number((document.querySelector('.guess').value = ''));
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});  */

//THE DRY CODE

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when Your wins
  if (!guess) {
    displayMessage('No Input Number...');
  } else if (guess === secretNumber) {
    displayMessage('correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //conditions
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'No. Too High...' : 'No. Too Low...'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the Game!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//ACTION ON AGAIN BUTTON WHEN CLICKED
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  Number((document.querySelector('.guess').value = ''));
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
