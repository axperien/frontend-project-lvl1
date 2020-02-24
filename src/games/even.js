import random from '../components/randNumber.js';
import game from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const data = () => {
  const number = random(50);
  const answer = (isEven(number)) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  game(rule, data);
};
