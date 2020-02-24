import random from '../components/randNumber.js';
import game from '../index.js';

const rule = 'What number is missing in the progression?';

const length = 10;

const getProgression = (start, d) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + d * i);
  }
  return progression;
};

const data = () => {
  const progression = getProgression(random(20), random(5) + 1);
  const randomIndex = random(progression.length);

  const temp = [...progression];
  temp[randomIndex] = '..';

  const answer = `${progression[randomIndex]}`;
  return [`${temp.join(' ')}`, answer];
};

export default () => {
  game(rule, data);
};
