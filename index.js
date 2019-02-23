// Write your code in this file!
let scuberGreetingForFeet = (distance) => {
  if (distance <= 400) {
    return "This one is on me!";
  }
  else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do.";
  }
}

let ternaryCheckCity = (destination) => {
  let result = "";
  destination === "NYC" ? result = "Ok, sounds good." : result = "No go.";
  return result;
}

let switchOnCharmFromTip = (tip) => {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}