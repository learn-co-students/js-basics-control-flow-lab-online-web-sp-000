// Write your code in this file!
function scuberGreetingForFeet(someNumber) {
  let greeting
  if (someNumber <= 400) {
    greeting = "This one is on me!"
  } else if (someNumber > 2000) {
    greeting = "I will gladly take your thirty bucks.";

    if (someNumber > 2500) {
      greeting = "No can do."
    }
  }
  return greeting
};

function ternaryCheckCity(someCity) {
  let result;
  someCity === "NYC" ? (result = "Ok, sounds good.") : (result = "No go.");
  return result;
};

function switchOnCharmFromTip(tip) {
  let answer;
  switch (tip) {
    case "generous":
      answer = "Thank you so much.";
      break;
    case "not as generous":
      answer = "Thank you.";
      break;
    default:
      answer = "Bye.";
  }

  return answer;
};
