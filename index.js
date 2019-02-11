// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let result = "No can do.";
  if (distance <= 400) {
    result = "This one is on me!";
  } else if (distance > 2000 && distance <= 2500) {
    result = "I will gladly take your thirty bucks.";
  }
  return result;
}

function ternaryCheckCity(city){
  result = city === "NYC" ? "Ok, sounds good." : "No go."
  return result;
}

function switchOnCharmFromTip(tip) {
  let result = "Bye.";
  switch (tip) {
    case "generous":
      result = "Thank you so much."
      break;
    case "not as generous":
      result = "Thank you."
      break;
    default:
      break;
  }
  return result;
}
