import random from '../components/randNumber.js';
import game from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = random(0, 50);
  const answer = (isEven(question)) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  game(rule, getGameData);
};
