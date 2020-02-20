import brainGameEven from './games/even.js';
import brainGameCalc from './games/calc.js';
import brainGameGcd from './games/gcd.js';

const app = (gameName) => {
  console.log('Welcome to the Brain Games!');
  switch (gameName) {
    case 'even':
      brainGameEven();
      break;
    case 'calc':
      brainGameCalc();
      break;
    case 'gcd':
      brainGameGcd();
      break;
    default:
      console.log('Game not found. Coming soon. Try later.');
  }
};

export default app;
