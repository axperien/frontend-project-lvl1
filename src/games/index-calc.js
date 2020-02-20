import readlineSync from 'readline-sync';
import answerUserName from '../components/answerUserName.js';
import startMessage from '../components/startMessage.js';
import correctMessage from '../components/correctMessage.js';
import finishMessage from '../components/finishMessage.js';
import variables from '../variables.js';


let number1;
let number2;
let counterQuestions = 0;
const numberOfQuestions = 3;
const operationOptions = ['-', '+', '*'];
let operation;

const sum = () => number1 + number2;
const diff = () => number1 - number2;
const multi = () => number1 * number2;

const checkResult = () => getResult(operation);

const getResult = (operationName) => {
  switch (operationName) {
    case '+':
      return sum();
    case '-':
      return diff();
    default:
      return multi();
  }
};

const askQuestion = () => {
  number1 = Math.floor(Math.random() * 10);
  number2 = Math.floor(Math.random() * 10);
  operation = operationOptions[Math.floor(Math.random() * operationOptions.length)];
  console.log(`${number1} ${operation} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  checkAnswer(answer);
};

const checkAnswer = (answer) => {
  if (+answer === checkResult()) {
    correctMessage();
    counterQuestions += 1;
    if (counterQuestions < numberOfQuestions) {
      askQuestion();
    } else {
      finishMessage();
    }
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${getResult(operation)}". \nLet's try again, ${variables.userName}!`);
  }
};

const calc = () => {
  variables.userName = answerUserName();
  startMessage('What is the result of the expression?');
  askQuestion();
};

export default calc;
