import brainGameEven from './games/index-even.js';
import brainGameCalc from './games/index-calc.js';

const app = (gameName) => {
  console.log('Welcome to the Brain Games!');
  switch (gameName) {
    case 'even':
      brainGameEven();
      break;
    case 'calc':
      brainGameCalc();
      break;
    default:
      console.log('Game not found. Coming soon. Try later.');
  }
};

export default app;
