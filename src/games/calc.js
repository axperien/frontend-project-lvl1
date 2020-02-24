import random from '../components/randNumber.js';
import game from '../index.js';
import { sum, diff, multi } from '../components/math.js';

const operationOptions = ['-', '+', '*'];

const rule = 'What is the result of the expression?';

const getResult = (num1, num2, operationName) => {
  switch (operationName) {
    case '+':
      return sum(num1, num2);
    case '-':
      return diff(num1, num2);
    default:
      return multi(num1, num2);
  }
};

const data = () => {
  const number1 = random(20);
  const number2 = random(20);

  const operation = operationOptions[Math.floor(Math.random() * operationOptions.length)];
  const expression = `${number1} ${operation} ${number2}`;

  const checkResult = () => getResult(number1, number2, operation);

  const answer = `${checkResult()}`;
  return [expression, answer];
};

export default () => {
  game(rule, data);
};
