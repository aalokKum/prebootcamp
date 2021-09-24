// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  //console.log(userInput);
  let number = parseInt(userInput);
  let i;
  let factorial = 1;
  for(i = number ; i>0; i--){
      factorial = factorial*i;
  }
  console.log(factorial);
  //end-here
});