import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  let userText = readString('user-text');
  let numberTimes = readNumber('number-of-times');

  // repeat the string
  let newText = '';
  for (let i = 0; i < numberTimes; i++ ){
    newText += userText;
  }

  // display the repeated string
  display('repeated-output', newText);
});
