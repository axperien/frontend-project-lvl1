import random from '../components/randNumber.js';
import game from '../index.js';

const rule = 'What number is missing in the progression?';

const length = 10;

const getProgression = (start, range) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + range * i);
  }
  return progression;
};

const getGameData = () => {
  const progressionStartNumber = random(0, 20);
  const progressionRange = random(1, 5);
  const progression = getProgression(progressionStartNumber, progressionRange);
  const randomIndex = random(0, progression.length - 1);

  const temp = [...progression];
  temp[randomIndex] = '..';

  const answer = progression[randomIndex];
  const question = temp.join(' ');
  return [question, answer];
};

export default () => {
  game(rule, getGameData);
};
