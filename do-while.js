// do-while loops
// almost idential to while loops
// use do-while when you want the iteration at least once

let i = 0;
let text = "";

do {
  //Body
  text += "the number is " + i;
  i++; //increment step
} while (i < 0); //condition

console.log(text);
