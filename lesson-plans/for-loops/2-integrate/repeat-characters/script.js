import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  let text = readString('user-text');
  let repeatNumbers = readNumber('number-of-times');

  // repeat the characters in the text
  let newtext = '';

  for (let i = 0; i < text.length ; i++ ) {
    for (let x = 0; x < repeatNumbers; x++) {
      newtext += text[i]
    }
  }

  // display the text with repeated characters
  display('repeated-output', newtext);
});
