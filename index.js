// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  }
  else if (distance > 2000 && distance <= 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else if (distance > 2500){
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  let result = city === "NYC" ? "Ok, sounds good.":"No go.";
  return result;
}

function switchOnCharmFromTip(tip){
  let reply;
  
  switch(tip) {
    case "generous":
      reply = "Thank you so much.";
      break;
    case "not as generous":
      reply = "Thank you."
      break;
    case "thanks for everything":
      reply = "Bye.";
      break;
  }
  
  return reply;
}