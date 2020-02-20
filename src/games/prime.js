import readlineSync from 'readline-sync';
import answerUserName from '../components/answerUserName.js';
import startMessage from '../components/startMessage.js';
import correctMessage from '../components/correctMessage.js';
import finishMessage from '../components/finishMessage.js';
import variables from '../variables.js';


let number;
let counterQuestions = 0;
const numberOfQuestions = 3;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const askQuestion = () => {
  number = Math.floor(Math.random() * 100);
  console.log(`${number}`);
  const answer = readlineSync.question('Your answer: ');
  checkAnswer(answer);
};

const checkAnswer = (answer) => {
  if ((answer === 'yes' && isPrime(number)) || (answer === 'no' && !isPrime(number))) {
    correctMessage();
    counterQuestions += 1;
    if (counterQuestions < numberOfQuestions) {
      askQuestion();
    } else {
      finishMessage();
    }
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isPrime(number) ? 'yes' : 'no'}". \nLet's try again, ${variables.userName}!`);
  }
};

const prime = () => {
  variables.userName = answerUserName();
  startMessage('Answer "yes" if given number is prime. Otherwise answer "no".');
  askQuestion();
};

export default prime;
