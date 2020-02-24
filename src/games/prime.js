import random from '../components/randNumber.js';
import game from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const data = () => {
  const number = random(100);
  const answer = (isPrime(number)) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  game(rule, data);
};
