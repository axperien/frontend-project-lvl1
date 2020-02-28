import readlineSync from 'readline-sync';

const stepsCount = 3;

export default (rule, data) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);

  for (let step = 0; step < stepsCount; step += 1) {
    const [question, answer] = data();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = answer.toString();

    if (userAnswer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${(correctAnswer)}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
