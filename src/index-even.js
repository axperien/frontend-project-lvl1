import readlineSync from 'readline-sync';

let counterQuestions = 0;
let currentNumber;
let userName;

const answerUserName = () => {
  userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
};

const checkEvenFalse = () => currentNumber % 2 !== 0;

const checkEvenTrue = () => currentNumber % 2 === 0;

const getAnswer = () => {
  currentNumber = Math.floor(Math.random() * 50);
  console.log(currentNumber);
  const answer = readlineSync.question('Your answer: ');
  checkAnswer(answer);
};

const startGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  getAnswer();
};

const checkAnswer = (answer) => {
  if ((answer === 'yes' && checkEvenTrue()) || (answer === 'no' && checkEvenFalse())) {
    console.log('Correct!');
    counterQuestions += 1;
    if (counterQuestions < 3) {
      getAnswer();
    } else {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${(checkEvenTrue()) ? 'yes' : 'no'}". \n Let's try again, ${userName}!`);
  }
};

const gameEven = () => {
  answerUserName();
  startGame();
};

export default gameEven;
