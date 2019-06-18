// Write your code in this file!

function scuberGreetingForFeet(distance_in_feet) {
  let message;

  if (distance_in_feet <= 400) {message = "This one is on me!"} 
  else if (distance_in_feet > 2000) {if (distance_in_feet > 2500) {message = "No can do."} 
  else {message = "I will gladly take your thirty bucks."}
  }

  return message;
}

function ternaryCheckCity(city) {
  
  const message = city === "NYC" ? "Ok, sounds good." :"No go." 
  return message; 
}


function switchOnCharmFromTip(tip){
  
  let message; 
  
  switch(tip){
    case 'generous': message = "Thank you so much."
    break;
    case 'not as generous' : message = "Thank you."
    break;
    default: message = "Bye."
  }
  return message; 
  
  
}