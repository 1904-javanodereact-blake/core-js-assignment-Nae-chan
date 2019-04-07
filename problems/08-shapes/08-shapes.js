/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/

//For this problem, I could have alternatively used arrays with
//the .fill and .join methods, but .repeat is much cleaner!

function printShape(shape, height, character) {
  //check if height is an odd number
  if (height % 2 == 0) {
    return console.log('Please enter an odd number for the height!');
  }
  switch (shape) {
    case 'square':
      shapeName = 'square';
      console.log('Square');
      //loop for printing characters
      for (let c = 1; c < height + 1; c++) {
        console.log(character.repeat(height));
      }
      break;
    case 'triangle':
      shapeName = 'Triangle';
      console.log('Triangle');
      //loop for printing characters
      for (let c = 1; c < height + 1; c++) {
        console.log(character.repeat(c));
      }
      break;
    case 'diamond':
      console.log('Diamond');
      let spaceBefore = ((height - 1) / 2) - 1;
      let charAfter = height - 2;
      let charBefore = 1;
      //loop for printing characters
      for (let c = 1; c < height + 1; c++) {
        if (c < (height + 1) / 2) {
          console.log(`${" ".repeat(spaceBefore)} ${character.repeat(charBefore)}`);
          spaceBefore--;
          charBefore = charBefore + 2;
        } else if (c === (height + 1) / 2) {
          console.log(character.repeat(height));
          spaceBefore++;
        } else if (c > height / 2) {
          console.log(`${" ".repeat(spaceBefore)} ${character.repeat(charAfter)}`);
          spaceBefore++;
          charAfter = charAfter - 2;
        }
      }
      break;
  }
}

//Which shape would you like to print? Specify params to test function above!
let inputShapeName = 'Square';
let inputShapeHeight = 10;
let inputShapeCharacter = '*';

printShape(inputShapeName.toLowerCase(), inputShapeHeight, inputShapeCharacter);
