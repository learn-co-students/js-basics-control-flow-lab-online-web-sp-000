// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let cost
  if (feet <= 400) {
    cost = "This one is on me!";
  }
  else if (feet > 2000 && feet < 2500) {
    cost = "I will gladly take your thirty bucks."
  }

  else if (feet > 2500) {
    cost = "No can do."
  }
  return cost;
}

// Ternary Check city

function ternaryCheckCity(city) {
  let choice
  city === "NYC" ? (choice = "Ok, sounds good.") : (choice = "No go.")
  return choice;

}


// switch on charm from tip

function switchOnCharmFromTip(tip) {

  const theTip = tip

  let response;

  switch (theTip) {
      case 'generous':
          response = 'Thank you so much.';
          break;
      case 'not as generous':
          response = "Thank you.";
          break;
      default:
          response = "Bye.";
  }

  return response;

}
