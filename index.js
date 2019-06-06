function scuberGreetingForFeet(someValue) {
  let result
  if (someValue > 2500) {
    result = "No can do.";
  }
  else if (someValue >= 2000) {
    result = "I will gladly take your thirty bucks.";
    }
  else if (someValue <= 400){
    result = "This one is on me!";
  }
  return result
}

function ternaryCheckCity(someCity) {

  let result;

return (someCity === "NYC") ? result = "Ok, sounds good." : result = "No go.";
}

function switchOnCharmFromTip(someTip) {
  let response;
  switch (someTip) {
    case "generous":
    response = "Thank you so much.";
      break;
    case "not as generous":
    response = "Thank you.";
      break;
    default:
    response = "Bye.";
  }
  return response
}
