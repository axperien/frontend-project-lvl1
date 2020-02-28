import random from '../components/randNumber.js';
import game from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const getGcd = (x, y) => (x ? getGcd(y % x, x) : y);

const getGameData = () => {
  const number1 = random(20);
  const number2 = random(20);
  const answer = getGcd(number1, number2);
  const question = `${number1} ${number2}`;
  return [question, answer];
};

export default () => {
  game(rule, getGameData);
};
