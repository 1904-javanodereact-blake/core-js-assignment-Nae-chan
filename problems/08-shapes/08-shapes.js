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
      //loop for tracking the space before characters
      // for (let s = 1; s < height-1; s++) {
      //   console.log(`${"".repeat(s)}`)
      // }

        //loop for tracking characters
        for (let c = 1; c < height + 1; c++) {
          let a;
let b;
          let space = " ";
          let countSpace = 5;
          a = character.repeat(c);
          b = space.repeat(countSpace);
          countSpace ++;
          console.log (`${b}...${a}`);
          
        }
        //loop for tracking characters
        for (let s = 1; s < height + 1; s++) {
          let space = "";
          let countSpace = 1;
         
          space ++;
          
        }
        //console.log (`${b}...${a}`);
      
      break;
  }
}
//which shape would you like to print? Specify params to test function above!
let inputShapeName = 'diamond';
let inputShapeHeight = 3;
let inputShapeCharacter = '3';

printShape(inputShapeName.toLowerCase(), inputShapeHeight, inputShapeCharacter);
