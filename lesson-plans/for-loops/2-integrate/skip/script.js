import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  

  // read user values
  let userText = readString('user-text');
  let userSize = readNumber('skip-size');
  


  // create a new string with skipped characters
  let newText = '';
  for (let i=0; i < userText.length; i = i + userSize){
    
    newText += userText[i];
  }


  // display the skipped string
  display('skipped-output', newText);
});
