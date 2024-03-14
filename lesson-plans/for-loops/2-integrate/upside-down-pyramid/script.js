import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  

  // read user text
  let userText = readString('to-pyramid')

  // create the pyramid
  let newText = '';
  
  for (let i = 0; i < userText.length; i++) {
    
    newText += userText.substr(i) + '\n';
    
  }

  // display the pyramid
  display('pyramided', newText);
});
