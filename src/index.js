import readlineSync from 'readline-sync';
import greetingUser from './components/answerUserName.js';

const stepsCount = 3;

export default (rule, data) => {
  console.log('Welcome to the Brain Games!');
  const userName = greetingUser();
  console.log(rule);

  for (let step = 0; step < stepsCount; step += 1) {
    const [question, correctAnswer] = data();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${(correctAnswer)}". \nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
