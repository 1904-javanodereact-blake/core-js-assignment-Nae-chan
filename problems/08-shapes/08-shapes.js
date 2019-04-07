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
//loop for tracking height
  for(let h = 1; h < height; h++){
    //loop for tracking the space before characters
    for(let s = 1; s < height-1; s++ ){
      console.log("");
      //loop for tracking characters
      for(let c = 1; c <=2; c++) {
        console.log(character.repeat(c));
      }
      
    }
}
console.log(shape);
}
function getShape(shape, height, character) {
  //check if height is an odd number
  if (height %2 == 0) {
    return console.log ('Please enter an odd number for the height!');
  }
  switch (shape) {
    case 'square' :
      shapeName = 'square';
      shapeHeight = height
      shapeCharacter = character
      printShape(shapeName, shapeHeight, shapeCharacter);
      break;
    case 'triangle' :
      shapeName = 'Triangle';
      shapeHeight = height
      shapeCharacter = character
      printShape(shapeName, shapeHeight, shapeCharacter);
      break;
    case 'diamond' :
      shapeName = 'Diamond';
      shapeHeight = height
      shapeCharacter = character
      printShape(shapeName, shapeHeight, shapeCharacter);
      break;
  }
  return shape;
}

let inputShapeName = 'Square';
let inputShapeHeight = 3;
let inputShapeCharacter = '3';

getShape(inputShapeName.toLowerCase(), inputShapeHeight, inputShapeCharacter);
