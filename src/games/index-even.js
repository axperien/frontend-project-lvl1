import readlineSync from 'readline-sync';
import answerUserName from '../components/answerUserName.js';
import startMessage from '../components/startMessage.js';
import correctMessage from '../components/correctMessage.js';
import finishMessage from '../components/finishMessage.js';
import variables from '../variables.js';

let currentNumber;
let counterQuestions = 0;
const numberOfQuestions = 3;

const checkEvenFalse = () => currentNumber % 2 !== 0;

const checkEvenTrue = () => currentNumber % 2 === 0;

const askQuestion = () => {
  currentNumber = Math.floor(Math.random() * 50);
  console.log(currentNumber);
  const answer = readlineSync.question('Your answer: ');
  checkAnswer(answer);
};

const checkAnswer = (answer) => {
  if ((answer === 'yes' && checkEvenTrue()) || (answer === 'no' && checkEvenFalse())) {
    correctMessage();
    counterQuestions += 1;
    if (counterQuestions < numberOfQuestions) {
      askQuestion();
    } else {
      finishMessage();
    }
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${(checkEvenTrue()) ? 'yes' : 'no'}". \nLet's try again, ${variables.userName}!`);
  }
};

const game = () => {
  variables.userName = answerUserName();
  startMessage('Answer "yes" if the number is even, otherwise answer "no".');
  askQuestion();
};

export default game;
