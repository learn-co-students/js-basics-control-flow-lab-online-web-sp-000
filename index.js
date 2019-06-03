// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  if (someValue<=400){
    return("This one is on me!");
  }
  else if(someValue<=2500 && someValue>400){
    return("I will gladly take your thirty bucks.");
  }
  else{
    return("No can do.");
  }
}

function ternaryCheckCity(city) {
  return (city=="NYC" ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(expr){
  switch (expr) {
    case 'generous':
      return('Thank you so much.');
      break;
    case 'not as generous':
      return('Thank you.');
      break;
    default:
      return('Bye.');
    }
}
