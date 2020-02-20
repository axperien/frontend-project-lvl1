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

const getGcd = (x, y) => (x ? getGcd(y % x, x) : y);

const checkResult = () => getGcd(number1, number2);

const askQuestion = () => {
  number1 = Math.floor(Math.random() * 20);
  number2 = Math.floor(Math.random() * 20);
  console.log(`${number1} ${number2}`);
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
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${checkResult()}". \nLet's try again, ${variables.userName}!`);
  }
};

const gcd = () => {
  variables.userName = answerUserName();
  startMessage('Find the greatest common divisor of given numbers.');
  askQuestion();
};

export default gcd;
