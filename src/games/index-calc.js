import answerUserName from '../components/answerUserName.js';
import startMessage from '../components/startMessage.js';
import variables from '../variables.js';

const game = () => {
  variables.userName = answerUserName();
  startMessage('What is the result of the expression?');
};

export default game;
