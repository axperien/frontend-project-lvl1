// eslint no-use-before-define: ["error", { "variables": false }]

import readlineSync from 'readline-sync';
import answerUserName from '../components/answerUserName.js';
import startMessage from '../components/startMessage.js';
import variables from '../variables.js';

let currentNumber;

const checkEvenFalse = () => currentNumber % 2 !== 0;

const checkEvenTrue = () => currentNumber % 2 === 0;

const getAnswer = () => {
  currentNumber = Math.floor(Math.random() * 50);
  console.log(currentNumber);
  const answer = readlineSync.question('Your answer: ');
  checkAnswer(answer);
};

const checkAnswer = (answer) => {
  if ((answer === 'yes' && checkEvenTrue()) || (answer === 'no' && checkEvenFalse())) {
    console.log('Correct!');
    variables.counterQuestions += 1;
    if (variables.counterQuestions < 3) {
      getAnswer();
    } else {
      console.log(`Congratulations, ${variables.userName}!`);
    }
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${(checkEvenTrue()) ? 'yes' : 'no'}". \nLet's try again, ${variables.userName}!`);
  }
};

const game = () => {
  variables.userName = answerUserName();
  startMessage('Answer "yes" if the number is even, otherwise answer "no".');
  getAnswer();
};

export default game;
