function scuberGreetingForFeet(feet){
  // Write your code here!
  let greeting = " ";
  if (feet <= 400) {
   
    greeting = 'This one is on me!';
   } else if (feet > 1999  && feet <= 2500) {
      
      greeting = 'I will gladly take your thirty bucks.';
   } else if (feet > 2500) {
     greeting = 'No can do.';
   }

   return greeting;

}

function ternaryCheckCity(city){
  // Write your code here!
  let message = "";
  if (city !== 'NYC') {
    message = "No go.";
  } else {
    message = 'Ok, sounds good.';
  }
  return message;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  
  let response;
  switch(tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default: 
      response = 'Bye.';
      break;

  }
 return response;
}
