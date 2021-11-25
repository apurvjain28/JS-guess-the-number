'use strict';

/*
1. Learnt about DOM and DOM manipulation through JS!
    content of element
    style of elemnet
2. Various JS functions and keywords like: 
    querySelector(...class, id etc.)
    addEventListener('click', function)
    .textContent, .value(for input func), .style
3. Use emoji (win+.)
4. USed Prettier tool
5. Leartt about DRY coding
    Minimise repition of lines by merging >,< cases to ==,!==
    make functions for lines used again n again
6. Frequent use of  condn ? true : false
7. math function: Math.trunc(Math.random() * 20) + 1
*/

/*
// DOM Manipulation
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;

// .value is used @input field to get actual value
console.log(document.querySelector('.guess').value); //Empty
document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value); //20


*/

// Handling Click events

let myNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Uncomment to test
// document.querySelector('.number').textContent = myNumber;

// FUNCTION OF BTN 'AGAIN'
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  myNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// FUNCTION OF BTN 'CHECK!'
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage('🚩 No Number!');

    // when player wins
  } else if (guess === myNumber) {
    displayMessage('🤑 Correct Number!');
    document.querySelector('.number').textContent = myNumber;

    if (document.querySelector('.highscore').textContent < score) {
      document.querySelector('.highscore').textContent = score;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // when guess is too low
  } else if (guess !== myNumber) {
    // when score go less than 20
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      // myNumber > guess ? '⬆ Number is larger' : '⬇ Number is smaller';

      displayMessage(
        myNumber > guess ? '⬆ Number is larger' : '⬇ Number is smaller'
      );
      score -= 1;
      document.querySelector('.score').textContent = score;
      // when score go less than 20
    } else {
      displayMessage('💔💩 You lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});
