import readlineSync from 'readline-sync';
import answerUserName from '../components/answerUserName.js';
import startMessage from '../components/startMessage.js';
import correctMessage from '../components/correctMessage.js';
import finishMessage from '../components/finishMessage.js';
import variables from '../variables.js';

let counterQuestions = 0;
const numberOfQuestions = 3;
const progression = [];
let randomIndex;

const getRange = (start, d) => {
  for (let i = 0; i <= 10; i += 1) {
    progression.push(start + d * i);
  }
};

const askQuestion = () => {
  getRange(Math.floor(Math.random() * 20), Math.floor(Math.random() * 5) + 1);
  randomIndex = Math.floor(Math.random() * progression.length);
  const temp = [...progression];
  temp[randomIndex] = '..';
  console.log(`${temp.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  checkAnswer(answer);
};

const checkAnswer = (answer) => {
  if (+answer === progression[randomIndex]) {
    correctMessage();
    counterQuestions += 1;
    if (counterQuestions < numberOfQuestions) {
      progression.splice(0, progression.length);
      askQuestion();
    } else {
      finishMessage();
    }
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${progression[randomIndex]}". \nLet's try again, ${variables.userName}!`);
  }
};

const game = () => {
  variables.userName = answerUserName();
  startMessage('What number is missing in the progression?');
  askQuestion();
};

export default game;
