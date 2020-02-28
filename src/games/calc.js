import random from '../components/randNumber.js';
import game from '../index.js';
import { sum, diff, multi } from '../components/math.js';

const operations = ['-', '+', '*'];

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

const getGameData = () => {
  const number1 = random(0, 20);
  const number2 = random(0, 20);
  const operationRandomIndex = random(0, operations.length);
  const operation = operations[operationRandomIndex];
  const expression = `${number1} ${operation} ${number2}`;

  const answer = getResult(number1, number2, operation);
  return [expression, answer];
};

export default () => {
  game(rule, getGameData);
};
