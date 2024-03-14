import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  

  // read user values
  let leftNR = readNumber('left');
  let rightNR = readNumber('right'); 

  // use a for loop to multiply the two numbers
  let result = leftNR * rightNR;
  // for (let i = 0; i < rightNR; i++){
  //   result += leftNR;
  //   return result;
  // }
  

  // display the product

  display('product', result);
});
