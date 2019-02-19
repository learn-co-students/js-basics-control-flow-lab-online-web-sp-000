// Write your code in this file!
let response;


function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    response = 'This one is on me!';
  } else if(someValue > 2500) {
    response = "No can do.";
  } else if(someValue > 2000) {
    response = "I will gladly take your thirty bucks.";
  }
}

scuberGreetingForFeet(199)

response
