import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  

  // read user text
  let userText = readString('user-text');


  // use a for loop that counts down (i--) to reverse the input
  let newText = '';
  for (let i = 0; i < userText.length; i++){
    newText = userText[i] + newText;
    
  }

  // display the reversed string
  display('reversed-output', newText);
});
