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

  let radius = parseFloat(userInput);
  
  let pi = Math.PI;
  
  if(radius >= 0){
    let circumference = 2*pi*radius;
    circumference = circumference.toFixed(2);
    console.log(circumference);
  }else{
        console.log("Error");
  } 
  //end-here
});